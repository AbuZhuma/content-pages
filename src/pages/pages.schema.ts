import { z } from 'zod';
import type { UpdatePageDto } from './dto/update.dto';
import { DropdownTemplate } from './templates/sets';
import { TextTemplate } from './templates/sets/text.template';
import { ImageTemplate } from './templates/sets/image.template';
import { TextInputTemplate } from './templates/input/text.input.template';
import { DropdownInputTemplate } from './templates/input/dropdown.input.template';
import { ImageInputTemplate } from './templates/input/image.input.template';

export const PageContentInputSchema = z.array(
  z.discriminatedUnion('type', [TextInputTemplate, DropdownInputTemplate, ImageInputTemplate]),
);

export type PageContentInputBlock = z.infer<typeof PageContentInputSchema>;
export type PageContentInputSingle = PageContentInputBlock[number];

export const PageMetaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const StoredContentMetaSchema = z.object({
  id: z.string().uuid(),
  order: z.number().int(),
});

export const ContentInputSchema = z.discriminatedUnion('type', [
  DropdownTemplate,
  TextTemplate,
  ImageTemplate,
]);

export const PageContentStoredSchema = StoredContentMetaSchema.and(ContentInputSchema);

export type PageContentBlock = z.infer<typeof PageContentStoredSchema>;

export type UpdatePageDbValues = Omit<UpdatePageDto, 'content'> & {
  content?: PageContentBlock[];
};

export const templateMap: Record<string, any> = {
  TEXT: TextTemplate,
  IMAGE: ImageTemplate,
  DROPDOWN: DropdownTemplate,
};
