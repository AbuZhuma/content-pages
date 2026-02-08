export const styles = {
  // === Text sizes ===
  textSizeHuge: 'text-huge',
  textSizeXLarge: 'text-xlarge',
  textSizeLarge: 'text-large',
  textSizeMedium: 'text-medium',
  textSizeSmall: 'text-small',
  textSizeXSmall: 'text-xsmall',

  // === Text weight ===
  textWeigthBold: 'text-bold',
  textWeigthSemiBold: 'text-semibold',
  textWeigthNormal: 'text-normal',
  textWeigthLight: 'text-light',

  // === Text alignment ===
  textAlignCenter: 'text-center',
  textAlignLeft: 'text-left',
  textAlignRight: 'text-right',
  textAlignJustify: 'text-justify',

  // === Image sizes ===
  imageSizeHuge: 'image-huge',
  imageSizeLarge: 'image-large',
  imageSizeMedium: 'image-medium',
  imageSizeSmall: 'image-small',
  imageSizeTiny: 'image-tiny',

  // === Block sizes ===
  blockSizeHuge: 'block-huge',
  blockSizeLarge: 'block-large',
  blockSizeMedium: 'block-medium',
  blockSizeSmall: 'block-small',
  blockSizeTiny: 'block-tiny',

  // === Positioning ===
  positionCenter: 'position-center',
  positionTop: 'position-top',
  positionBottom: 'position-bottom',
  positionLeft: 'position-left',
  positionRight: 'position-right',
  positionTopLeft: 'position-top-left',
  positionTopRight: 'position-top-right',
  positionBottomLeft: 'position-bottom-left',
  positionBottomRight: 'position-bottom-right',

  // === Margin Top ===
  mt0: 'margin-top-0',
  mt5: 'margin-top-5',
  mt10: 'margin-top-10',
  mt15: 'margin-top-15',
  mt20: 'margin-top-20',
  mt25: 'margin-top-25',
  mt30: 'margin-top-30',
  mt35: 'margin-top-35',
  mt40: 'margin-top-40',
  mt50: 'margin-top-50',

  // === Margin Bottom ===
  mb0: 'margin-bottom-0',
  mb5: 'margin-bottom-5',
  mb10: 'margin-bottom-10',
  mb15: 'margin-bottom-15',
  mb20: 'margin-bottom-20',
  mb25: 'margin-bottom-25',
  mb30: 'margin-bottom-30',
  mb35: 'margin-bottom-35',
  mb40: 'margin-bottom-40',
  mb50: 'margin-bottom-50',

  // === Margin Left ===
  ml0: 'margin-left-0',
  ml5: 'margin-left-5',
  ml10: 'margin-left-10',
  ml15: 'margin-left-15',
  ml20: 'margin-left-20',
  ml25: 'margin-left-25',
  ml30: 'margin-left-30',
  ml35: 'margin-left-35',
  ml40: 'margin-left-40',
  ml50: 'margin-left-50',

  // === Margin Right ===
  mr0: 'margin-right-0',
  mr5: 'margin-right-5',
  mr10: 'margin-right-10',
  mr15: 'margin-right-15',
  mr20: 'margin-right-20',
  mr25: 'margin-right-25',
  mr30: 'margin-right-30',
  mr35: 'margin-right-35',
  mr40: 'margin-right-40',
  mr50: 'margin-right-50',

  // === Padding Top ===
  pt0: 'padding-top-0',
  pt5: 'padding-top-5',
  pt10: 'padding-top-10',
  pt15: 'padding-top-15',
  pt20: 'padding-top-20',
  pt25: 'padding-top-25',
  pt30: 'padding-top-30',
  pt35: 'padding-top-35',
  pt40: 'padding-top-40',
  pt50: 'padding-top-50',

  // === Padding Bottom ===
  pb0: 'padding-bottom-0',
  pb5: 'padding-bottom-5',
  pb10: 'padding-bottom-10',
  pb15: 'padding-bottom-15',
  pb20: 'padding-bottom-20',
  pb25: 'padding-bottom-25',
  pb30: 'padding-bottom-30',
  pb35: 'padding-bottom-35',
  pb40: 'padding-bottom-40',
  pb50: 'padding-bottom-50',

  // === Padding Left ===
  pl0: 'padding-left-0',
  pl5: 'padding-left-5',
  pl10: 'padding-left-10',
  pl15: 'padding-left-15',
  pl20: 'padding-left-20',
  pl25: 'padding-left-25',
  pl30: 'padding-left-30',
  pl35: 'padding-left-35',
  pl40: 'padding-left-40',
  pl50: 'padding-left-50',

  // === Padding Right ===
  pr0: 'padding-right-0',
  pr5: 'padding-right-5',
  pr10: 'padding-right-10',
  pr15: 'padding-right-15',
  pr20: 'padding-right-20',
  pr25: 'padding-right-25',
  pr30: 'padding-right-30',
  pr35: 'padding-right-35',
  pr40: 'padding-right-40',
  pr50: 'padding-right-50',
} as const;

export type StyleKey = keyof typeof styles;
export type StyleValue = (typeof styles)[StyleKey];
