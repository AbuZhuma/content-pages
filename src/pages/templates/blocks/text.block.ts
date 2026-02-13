import { buildStyles } from 'src/common/utils';
import { z } from 'zod';

export const TextBlock = z.object({
  text: z.string().min(1),
  styles: buildStyles([]),
});
