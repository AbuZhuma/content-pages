import { Injectable, Inject } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PageContentInputBlock, UpdatePageDbValues } from './pages.schema';
import { pages } from 'src/db/schema';
import { DB } from 'src/db/db.module';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from 'src/db/schema';
import { type UpdatePageDto, type CreatePageDto } from './dto';
import { HttpErrors } from 'src/common/errors';
import { styles } from './templates/styles';
import { buildContentBlocks } from 'src/common/utils/buildContents';
import { Lang, langsMap } from 'src/common/schema/i18n';
import { withOneText } from 'src/common/utils/withOneText';

@Injectable()
export class PagesService {
  constructor(
    @Inject(DB)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async create(dto: CreatePageDto, uploadedUrls: string[]) {
    const isExist = await this.db.query.pages.findFirst({
      where: eq(pages.slug, dto.slug),
    });
    if (isExist) {
      return HttpErrors.badRequest('Page with this slug already exist!');
    }
    const content = await buildContentBlocks(dto.content, uploadedUrls);
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

  async findOneBySlug(slug: string, locale: string) {
    const page = await this.db.query.pages.findFirst({
      where: eq(pages.slug, slug),
    });

    if (!page) {
      return HttpErrors.notFound('This page not found');
    }

    const blocks: PageContentInputBlock = page.content || [];
    const correctLocale = langsMap[locale] ? langsMap[locale] : 'ru';
    const localizedBlocks = blocks.map((block) => withOneText(correctLocale as Lang, block));

    return {
      ...page,
      content: localizedBlocks,
    };
  }

  async update(slug: string, dto: UpdatePageDto, uploadedUrls: string[]) {
    const { content, ...rest } = dto;

    const values: UpdatePageDbValues = {
      ...rest,
    };

    if (content) {
      values.content = await buildContentBlocks(content, uploadedUrls);
    }

    const [page] = await this.db.update(pages).set(values).where(eq(pages.slug, slug)).returning();

    if (!page) {
      return HttpErrors.notFound('This page not found');
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
