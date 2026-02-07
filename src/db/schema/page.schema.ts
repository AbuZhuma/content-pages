import {
  pgTable,
  uuid,
  varchar,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";
import { pgEnum } from "drizzle-orm/pg-core";
import { PAGE_CATEGORYS } from "src/pages/pages.const";
import { PageContentBlock } from "src/pages/pages.schema";

export const pageCategoryEnum = pgEnum(
  "page_category",
  PAGE_CATEGORYS,
);

export const pages = pgTable("pages", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug").notNull().unique(),
  category: pageCategoryEnum("category").notNull(),
  meta: jsonb("meta").notNull(),
  content: jsonb("content")
    .$type<PageContentBlock[]>()
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => new Date()),
});
