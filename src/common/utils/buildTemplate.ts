import { BaseBlock } from 'src/pages/templates/blocks/base.block';
import type { ZodObject } from 'zod';
import { z } from 'zod';

export const buildTemplate = (type: string, data: ZodObject): ZodObject => {
  const tempo = BaseBlock.extend({
    type: z.literal(type),
    data: data,
  });
  return tempo;
};
