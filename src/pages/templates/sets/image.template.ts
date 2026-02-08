import { buildTemplate } from 'src/common/utils/buildTemplate';
import { z } from 'zod';
import { ImageBlock } from '../blocks';
import { buildStyles } from 'src/common/utils';

export const ImageTemplate = buildTemplate(
  'IMAGE',
  z.object({
    source: ImageBlock.extend({
      styles: buildStyles(['imageSizeMedium', 'positionCenter']),
    }),
  }),
);
