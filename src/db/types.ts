import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import type { pages } from './schema';

export type Page = InferSelectModel<typeof pages>;
export type CreatePage = InferInsertModel<typeof pages>;
