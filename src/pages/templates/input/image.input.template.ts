import { buildStyles } from 'src/common/utils';
import { buildTemplate } from 'src/common/utils/buildTemplate';
import { z } from 'zod';

export const ImageInputTemplate = buildTemplate(
  'IMAGE',
  z.object({
    styles: buildStyles([]),
  }),
);
