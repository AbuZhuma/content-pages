import { styles } from 'src/pages/templates/styles';
import type { ZodDefault, ZodString } from 'zod';
import { z } from 'zod';

export const buildStyles = (keys: (keyof typeof styles)[]): ZodDefault<ZodString> => {
  return z.string().default(keys.map((key) => styles[key]).join(' '));
};
