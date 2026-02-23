import { buildTemplate } from 'src/common/utils/buildTemplate';
import { z } from 'zod';
import { TextInputBlock } from '../blocks/text-input.block';

export const TextInputTemplate = buildTemplate(
  'TEXT',
  z.object({
    text: TextInputBlock,
  }),
);
