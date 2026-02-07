import {z} from "zod";

export const TextContent = z.object({
  type: z.literal("TEXT"),
  styles: z.string().optional(),
  data: z.object({
    text: z.string().min(1),
  }),
});
  