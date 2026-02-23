import { z } from 'zod';

export const langs = ['ru', 'uz', 'ky', 'en'] as const;
export type Lang = (typeof langs)[number];

export const I18nTextSchema = z.object({
  ru: z.string().min(1),
  uz: z.string().min(1),
  ky: z.string().min(1),
  en: z.string().min(1),
});
export const langsMap = {
  ru: 'ru',
  kg: 'ky',
  uz: 'uz',
  en: 'en',
};
export type I18nText = z.infer<typeof I18nTextSchema>;
