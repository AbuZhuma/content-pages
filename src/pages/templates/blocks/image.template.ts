import { z } from 'zod';

export const ImageTemplate = z.object({
  styles: z.string(),
  src: z.string().min(1),
});
