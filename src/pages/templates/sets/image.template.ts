import { buildTemplate } from 'src/common/utils/buildTemplate';
import { z } from 'zod';
import { buildStyles } from 'src/common/utils';

export const ImageTemplate = buildTemplate(
  'IMAGE',
  z.object({
    styles: buildStyles(['imageSizeMedium', 'positionCenter']),
  }),
);
