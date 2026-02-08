import { z } from 'zod';
import { buildStyles } from 'src/common/utils';
import { TextBlock } from '../blocks';
import { buildTemplate } from 'src/common/utils/buildTemplate';

export const DropdownTemplate = buildTemplate(
  'DROPDOWN',
  z.object({
    heading: TextBlock.extend({
      styles: buildStyles(['textSizeLarge', 'textWeigthSemiBold', 'textAlignLeft']),
    }),
    inner: TextBlock.extend({
      styles: buildStyles(['textSizeMedium', 'textWeigthNormal', 'textAlignLeft']),
    }),
  }),
);
