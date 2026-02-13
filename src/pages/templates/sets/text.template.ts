import { buildTemplate } from 'src/common/utils/buildTemplate';
import { z } from 'zod';
import { TextBlock } from '../blocks';
import { buildStyles } from 'src/common/utils';

export const TextTemplate = buildTemplate(
  'TEXT',
  z.object({
    text: TextBlock.extend({
      styles: buildStyles([]),
    }),
  }),
);
