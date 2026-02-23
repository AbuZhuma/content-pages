import { randomUUID } from 'crypto';
import { withTranslatedText } from 'src/common/utils/withTranslatedText';
import type { PageContentBlock } from 'src/pages/pages.schema';
import { templateMap } from 'src/pages/pages.schema';

export const buildContentBlocks = async (
  content: any[],
  uploadedUrls: string[],
): Promise<PageContentBlock[]> => {
  let imageCounter = 0;
  const result: PageContentBlock[] = [];

  for (let i = 0; i < content.length; i++) {
    const rawBlock = content[i];
    const translatedBlock = await withTranslatedText(rawBlock);
    const parsedBlock = templateMap[translatedBlock.type].parse(translatedBlock);
    if (parsedBlock.type === 'IMAGE') {
      const imgUrl = uploadedUrls[imageCounter++];
      result.push({
        ...parsedBlock,
        data: {
          ...parsedBlock.data,
          source: imgUrl,
        },
        id: randomUUID(),
        order: i,
      });
    } else {
      result.push({
        ...parsedBlock,
        id: randomUUID(),
        order: i,
      });
    }
  }

  return result;
};
