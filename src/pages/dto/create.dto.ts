import {z} from "zod";
import { PageCategorySchema } from "../pages.const";
import { PageContentInputSchema, PageMetaSchema } from "../pages.schema";

export const CreatePageSchema = z.object({
  slug: z.string().min(1),
  category: PageCategorySchema,
  meta: PageMetaSchema,
  content: PageContentInputSchema,
});

export type CreatePageDto =
  z.infer<typeof CreatePageSchema>;