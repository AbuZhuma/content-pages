import { z } from 'zod';
import { buildStyles } from 'src/common/utils';

export const TextInputBlock = z.object({
  text: z.string().min(1),
  styles: buildStyles([]),
});
