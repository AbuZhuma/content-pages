import { z } from "zod";
import { CreatePageSchema } from "./create.dto";

export const UpdatePageSchema =
    CreatePageSchema.partial();

export type UpdatePageDto =
    z.infer<typeof UpdatePageSchema>;   