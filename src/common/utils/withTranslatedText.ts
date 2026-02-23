import { translateMultiple } from './translate';

export const withTranslatedText = async (block: any) => {
  if (!block?.data) return block;

  if (block.type === 'TEXT') {
    return {
      ...block,
      data: {
        ...block.data,
        text: {
          text: await translateMultiple(block.data.text.text),
          styles: block.data.text.styles,
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
          text: await translateMultiple(block.data.heading.text),
        },
        inner: {
          ...block.data.inner,
          text: await translateMultiple(block.data.inner.text),
        },
      },
    };
  }

  return block;
};
