import { Injectable, Inject } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { randomUUID } from 'crypto';
import { type PageContentBlock, templateMap, UpdatePageDbValues } from './pages.schema';
import { pages } from 'src/db/schema';
import { DB } from 'src/db/db.module';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from 'src/db/schema';
import { type UpdatePageDto, type CreatePageDto } from './dto';
import { HttpErrors } from 'src/common/errors';
import { styles } from './templates/styles';

@Injectable()
export class PagesService {
  constructor(
    @Inject(DB)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async create(dto: CreatePageDto, uploadedUrls: string[]) {
    let imageCounter = 0;
    const isExist = await this.db.query.pages.findFirst({
      where: eq(pages.slug, dto.slug),
    });
    if (isExist) {
      return HttpErrors.badRequest('Page with this slug already exist!');
    }

    const content: PageContentBlock[] = dto.content.map((block, index) => {
      const parsedBlock = templateMap[block.type as string].parse(block);
      if (block.type === 'IMAGE') {
        const imgUrl = uploadedUrls[imageCounter];
        imageCounter++;

        return {
          ...parsedBlock,
          data: {
            ...parsedBlock.data,
            source: imgUrl,
          },
          id: randomUUID(),
          order: index,
        };
      }
      return {
        ...parsedBlock,
        id: randomUUID(),
        order: index,
      };
    });

    const [page] = await this.db
      .insert(pages)
      .values({
        ...dto,
        content,
      })
      .returning();

    return page;
  }

  async findAll() {
    return this.db.select().from(pages);
  }

  async findOne(id: string) {
    const page = await this.db.query.pages.findFirst({
      where: eq(pages.id, id),
    });

    if (!page) {
      return HttpErrors.notFound('This page not found');
    }

    return page;
  }

  async findOneBySlug(slug: string) {
    const page = await this.db.query.pages.findFirst({
      where: eq(pages.slug, slug),
    });

    if (!page) {
      return HttpErrors.notFound('This page not found');
    }

    return page;
  }

  async update(id: string, dto: UpdatePageDto) {
    const { content, ...rest } = dto;

    const values: UpdatePageDbValues = rest;

    if (content) {
      values.content = content.map((block, index) => ({
        ...block,
        id: randomUUID(),
        order: index,
      }));
    }

    const [page] = await this.db.update(pages).set(values).where(eq(pages.id, id)).returning();

    if (!page) {
      HttpErrors.notFound('This page not found');
    }

    return page;
  }

  async remove(id: string) {
    const [page] = await this.db.delete(pages).where(eq(pages.id, id)).returning();

    if (!page) {
      HttpErrors.notFound('This page not found');
    }

    return page;
  }

  async getStyles() {
    const stylesKeys = Object.values(styles);
    return stylesKeys;
  }
}
