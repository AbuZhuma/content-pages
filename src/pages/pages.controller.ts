import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';

import { PagesService } from './pages.service';
import { CreatePageSchema, UpdatePageSchema } from './dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';
import { extname } from 'path';
import { HttpErrors } from 'src/common/errors';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 20, {
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, cb) => {
          cb(null, `${randomUUID()}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(@UploadedFiles() files: Express.Multer.File[], @Body('data') rawData: string) {
    let dto;
    try {
      dto = JSON.parse(rawData);
    } catch (err) {
      throw HttpErrors.badRequest('Invalid json in data field');
    }

    const parseResult = CreatePageSchema.safeParse(dto);
    if (!parseResult.success) {
      const errors = JSON.parse(parseResult.error.message)
        .map((err) => {
          const path = err.path.length ? err.path.join('.') : 'root';
          return `${path}: ${err.message}`;
        })
        .join('; ');

      throw HttpErrors.badRequest(errors);
    }

    const validatedDto = parseResult.data;
    const uploadedUrls = files ? files.map((file) => `/uploads/${file.filename}`) : [];

    return this.pagesService.create(validatedDto, uploadedUrls);
  }

  @Get()
  findAll() {
    return this.pagesService.findAll();
  }

  @Get('styles')
  getStyles() {
    return this.pagesService.getStyles();
  }

  @Get(':locale/:slug')
  findOneBySlug(@Param('locale') locale: string, @Param('slug') slug: string) {
    return this.pagesService.findOneBySlug(slug, locale);
  }

  @Patch(':slug')
  @UseInterceptors(
    FilesInterceptor('images', 20, {
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, cb) => {
          cb(null, `${randomUUID()}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  update(
    @Param('slug') slug: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body('data') rawData: string,
  ) {
    let dto;

    try {
      dto = JSON.parse(rawData);
    } catch {
      throw HttpErrors.badRequest('Invalid json in data field');
    }

    const parseResult = UpdatePageSchema.safeParse(dto);
    if (!parseResult.success) {
      const errors = JSON.parse(parseResult.error.message)
        .map((err) => {
          const path = err.path.length ? err.path.join('.') : 'root';
          return `${path}: ${err.message}`;
        })
        .join('; ');

      throw HttpErrors.badRequest(errors);
    }

    const uploadedUrls = files ? files.map((f) => `/uploads/${f.filename}`) : [];

    return this.pagesService.update(slug, parseResult.data, uploadedUrls);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagesService.remove(id);
  }
}
