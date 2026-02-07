import { z } from 'zod';
import { TextTemplate } from '../blocks';
import { buildStyles } from 'src/common/utils';

export const DropdownTemplate = z.object({
  type: z.literal('DROPDOWN'),
  data: z.object({
    heading: TextTemplate.extend({
      styles: buildStyles(['mts', 'mtw', 'tl']),
    }),
    inner: TextTemplate.extend({
      styles: buildStyles(['sts', 'stw', 'tl']),
    }),
  }),
});
