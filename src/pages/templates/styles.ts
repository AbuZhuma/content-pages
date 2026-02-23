const spacing = {
  mt0: 'mt-0',
  mt10: 'mt-10',
  mt20: 'mt-20',
  mt30: 'mt-30',
  mt40: 'mt-40',
  mt50: 'mt-50',
  mt60: 'mt-60',
  mt70: 'mt-70',
  mt80: 'mt-80',
  mt90: 'mt-90',
  mt100: 'mt-100',

  mb0: 'mb-0',
  mb10: 'mb-10',
  mb20: 'mb-20',
  mb30: 'mb-30',
  mb40: 'mb-40',
  mb50: 'mb-50',
  mb60: 'mb-60',
  mb70: 'mb-70',
  mb80: 'mb-80',
  mb90: 'mb-90',
  mb100: 'mb-100',

  ml0: 'ml-0',
  ml10: 'ml-10',
  ml20: 'ml-20',
  ml30: 'ml-30',
  ml40: 'ml-40',
  ml50: 'ml-50',
  ml60: 'ml-60',
  ml70: 'ml-70',
  ml80: 'ml-80',
  ml90: 'ml-90',
  ml100: 'ml-100',

  mr0: 'mr-0',
  mr10: 'mr-10',
  mr20: 'mr-20',
  mr30: 'mr-30',
  mr40: 'mr-40',
  mr50: 'mr-50',
  mr60: 'mr-60',
  mr70: 'mr-70',
  mr80: 'mr-80',
  mr90: 'mr-90',
  mr100: 'mr-100',

  mAuto: 'm-auto',

  // ==========================
  // === Padding (expanded) ===
  pt0: 'pt-0',
  pt10: 'pt-10',
  pt20: 'pt-20',
  pt30: 'pt-30',
  pt40: 'pt-40',
  pt50: 'pt-50',
  pt60: 'pt-60',
  pt70: 'pt-70',
  pt80: 'pt-80',
  pt90: 'pt-90',
  pt100: 'pt-100',

  pb0: 'pb-0',
  pb10: 'pb-10',
  pb20: 'pb-20',
  pb30: 'pb-30',
  pb40: 'pb-40',
  pb50: 'pb-50',
  pb60: 'pb-60',
  pb70: 'pb-70',
  pb80: 'pb-80',
  pb90: 'pb-90',
  pb100: 'pb-100',

  pl0: 'pl-0',
  pl10: 'pl-10',
  pl20: 'pl-20',
  pl30: 'pl-30',
  pl40: 'pl-40',
  pl50: 'pl-50',
  pl60: 'pl-60',
  pl70: 'pl-70',
  pl80: 'pl-80',
  pl90: 'pl-90',
  pl100: 'pl-100',

  pr0: 'pr-0',
  pr10: 'pr-10',
  pr20: 'pr-20',
  pr30: 'pr-30',
  pr40: 'pr-40',
  pr50: 'pr-50',
  pr60: 'pr-60',
  pr70: 'pr-70',
  pr80: 'pr-80',
  pr90: 'pr-90',
  pr100: 'pr-100',
};
export const styles = {
  // === Text size (3 levels) ===
  textSm: 'text-sm',
  textMd: 'text-md',
  textLg: 'text-lg',

  // === Text weight (3 levels) ===
  textLight: 'text-light',
  textRegular: 'text-regular',
  textBold: 'text-bold',

  // === Text style ===
  italic: 'text-italic',
  uppercase: 'text-uppercase',
  capitalize: 'text-capitalize',
  truncate: 'text-truncate',
  underline: 'text-underline',

  // === Text align ===
  alignLeft: 'text-left',
  alignCenter: 'text-center',
  alignRight: 'text-right',

  // === Text color (base only) ===
  textPrimary: 'text-primary',
  textSecondary: 'text-secondary',
  textMuted: 'text-muted',

  // === Background ===
  bgPrimary: 'bg-primary',
  bgSecondary: 'bg-secondary',
  bgTransparent: 'bg-transparent',

  // === Image ===
  imgSm: 'img-sm',
  imgMd: 'img-md',
  imgLg: 'img-lg',
  imgCover: 'img-cover',
  imgContain: 'img-contain',
  imgRound: 'img-round',

  // === Display ===
  block: 'd-block',
  flex: 'd-flex',
  grid: 'd-grid',
  hidden: 'd-none',

  // === Flex ===
  row: 'flex-row',
  col: 'flex-col',
  justifyCenter: 'justify-center',
  justifyBetween: 'justify-between',
  alignCenterFlex: 'align-center',

  // === Position ===
  relative: 'pos-relative',
  absolute: 'pos-absolute',
  fixed: 'pos-fixed',

  // === Border ===
  border: 'border',
  borderNone: 'border-none',
  radiusSm: 'radius-sm',
  radiusMd: 'radius-md',
  radiusLg: 'radius-lg',

  // === Cursor ===
  cursorDefault: 'cursor-default',
  cursorPointer: 'cursor-pointer',
  cursorDisabled: 'cursor-disabled',

  // === Interaction ===
  hoverUnderline: 'hover-underline',
  hoverScale: 'hover-scale',
  activeScale: 'active-scale',
  center: 'centering',
  ...spacing,
} as const;

export type StyleKey = keyof typeof styles;
export type StyleValue = (typeof styles)[StyleKey];
