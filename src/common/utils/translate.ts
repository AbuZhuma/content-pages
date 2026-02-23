import type { I18nText } from '../schema/i18n';

export const langs = ['ru', 'uz', 'ky', 'en'];

export const translate = async (from: string, to: string, text: string) => {
  const query = encodeURIComponent(text);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${query}`;
  const res = await fetch(url);
  const data = await res.json();
  const translatedText = data[0].map((item: any) => item[0]).join('');
  return translatedText;
};

export const translateMultiple = async (text: string): Promise<I18nText> => {
  const results = {} as I18nText;

  await Promise.all(
    langs.map(async (lang) => {
      if (lang === 'ru') {
        results[lang] = text;
        return;
      }
      results[lang] = await translate('auto', lang, text);
    }),
  );

  return results;
};
