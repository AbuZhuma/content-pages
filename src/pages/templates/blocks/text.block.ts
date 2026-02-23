import { I18nTextSchema } from 'src/common/schema/i18n';
import { buildStyles } from 'src/common/utils';
import { z } from 'zod';

export const TextBlock = z.object({
  text: I18nTextSchema,
  styles: buildStyles([]),
});
