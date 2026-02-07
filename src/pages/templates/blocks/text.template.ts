import { z } from 'zod';

export const TextTemplate = z.object({
  text: z.string().min(1),
  styles: z.string().optional(),
});
