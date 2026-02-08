import { z } from 'zod';
import { buildStyles } from 'src/common/utils';
import { TextBlock } from '../blocks';
import { buildTemplate } from 'src/common/utils/buildTemplate';

export const TitleTemplate = buildTemplate(
  'TITLE',
  z.object({
    text: TextBlock.extend({
      styles: buildStyles(['textSizeHuge', 'textWeigthBold', 'textAlignLeft']),
    }),
  }),
);
