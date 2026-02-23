import { buildTemplate } from 'src/common/utils/buildTemplate';
import { z } from 'zod';
import { TextInputBlock } from '../blocks/text-input.block';

export const DropdownInputTemplate = buildTemplate(
  'DROPDOWN',
  z.object({
    heading: TextInputBlock,
    inner: TextInputBlock,
  }),
);
