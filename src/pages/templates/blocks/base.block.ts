import { z } from 'zod';

export const BaseBlock = z.object({
  type: z.string(),
  styles: z.string().optional(),
  data: z.object(),
});
