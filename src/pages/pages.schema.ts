import { z } from 'zod';
import type { UpdatePageDto } from './dto/update.dto';
import { DropdownTemplate, TitleTemplate } from './templates/sets';

export const ContentInputSchema = z.discriminatedUnion('type', [TitleTemplate, DropdownTemplate]);

export type ContentInput = z.infer<typeof ContentInputSchema>;

export const PageContentInputSchema = z.array(ContentInputSchema);

export type PageContentInput = z.infer<typeof PageContentInputSchema>;

export const PageMetaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export type PageMeta = z.infer<typeof PageMetaSchema>;

const StoredContentMetaSchema = z.object({
  id: z.string().uuid(),
  order: z.number().int(),
});

export const PageContentStoredSchema = StoredContentMetaSchema.and(ContentInputSchema);

export type PageContentBlock = z.infer<typeof PageContentStoredSchema>;

export type UpdatePageDbValues = Omit<UpdatePageDto, 'content'> & {
  content?: PageContentBlock[];
};
