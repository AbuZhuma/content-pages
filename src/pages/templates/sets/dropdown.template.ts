import { z } from 'zod';
import { buildTemplate } from 'src/common/utils/buildTemplate';
import { TextBlock } from '../blocks';

export const DropdownTemplate = buildTemplate(
  'DROPDOWN',
  z.object({
    heading: TextBlock,
    inner: TextBlock,
  }),
);
