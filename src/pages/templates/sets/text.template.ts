import { buildTemplate } from 'src/common/utils/buildTemplate';
import { z } from 'zod';
import { TextBlock } from '../blocks';

export const TextTemplate = buildTemplate(
  'TEXT',
  z.object({
    text: TextBlock,
  }),
);
