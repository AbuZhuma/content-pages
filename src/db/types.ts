import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pages } from "./schema";

export type Page = InferSelectModel<typeof pages>;
export type CreatePage = InferInsertModel<typeof pages>