import type { Lang } from '../schema/i18n';

export const withOneText = (local: Lang, block: any) => {
  if (!block?.data) return block;

  if (block.type === 'TEXT') {
    return {
      ...block,
      data: {
        ...block.data,
        text: {
          ...block.data.text,
          text: block.data.text.text[local],
        },
      },
    };
  }

  if (block.type === 'DROPDOWN') {
    return {
      ...block,
      data: {
        ...block.data,
        heading: {
          ...block.data.heading,
          text: block.data.heading.text[local],
        },
        inner: {
          ...block.data.inner,
          text: block.data.inner.text[local],
        },
      },
    };
  }

  return block;
};
