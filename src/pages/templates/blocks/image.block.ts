import { z } from 'zod';
import { buildStyles } from 'src/common/utils';

export const ImageBlock = z.object({
  source: z.string().url(),
  styles: buildStyles([]),
});
