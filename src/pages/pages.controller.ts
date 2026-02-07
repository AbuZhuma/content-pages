import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

import { PagesService } from './pages.service';
import { ZodValidationPipe } from 'src/common/zod/zod.pipe';
import { type CreatePageDto, CreatePageSchema, type UpdatePageDto, UpdatePageSchema } from './dto';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(CreatePageSchema))
    dto: CreatePageDto,
  ) {
    return this.pagesService.create(dto);
  }

  @Get()
  findAll() {
    return this.pagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdatePageSchema))
    dto: UpdatePageDto,
  ) {
    return this.pagesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagesService.remove(id);
  }
}
