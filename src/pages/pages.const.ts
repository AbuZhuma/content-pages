import {z} from "zod";

export const PAGE_CATEGORYS = ["FOOTER", "BLOG"] as const;
export const PageCategorySchema = z.enum(PAGE_CATEGORYS);