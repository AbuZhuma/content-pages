import { z } from 'zod';
import { TextTemplate } from '../blocks';
import { buildStyles } from 'src/common/utils';

export const TitleTemplate = z.object({
  type: z.literal('TEXT'),
  data: z.object({
    text: TextTemplate.extend({
      styles: buildStyles(['lts', 'ltw', 'tc']),
    }),
  }),
});
