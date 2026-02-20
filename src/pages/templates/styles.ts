const spacing = {
  // ==========================
  // === Margin (expanded) ===
  mt0: 'mt-0',
  mt10: 'mt-10',
  mt30: 'mt-30',
  mt60: 'mt-60',
  mt100: 'mt-100',

  mb0: 'mb-0',
  mb10: 'mb-10',
  mb30: 'mb-30',
  mb60: 'mb-60',
  mb100: 'mb-100',

  ml0: 'ml-0',
  ml10: 'ml-10',
  ml30: 'ml-30',
  ml60: 'ml-60',
  ml100: 'ml-100',

  mr0: 'mr-0',
  mr10: 'mr-10',
  mr30: 'mr-30',
  mr60: 'mr-60',
  mr100: 'mr-100',

  mAuto: 'm-auto',

  // ==========================
  // === Padding (expanded) ===
  pt0: 'pt-0',
  pt10: 'pt-10',
  pt30: 'pt-30',
  pt60: 'pt-60',
  pt100: 'pt-100',

  pb0: 'pb-0',
  pb10: 'pb-10',
  pb30: 'pb-30',
  pb60: 'pb-60',
  pb100: 'pb-100',

  pl0: 'pl-0',
  pl10: 'pl-10',
  pl30: 'pl-30',
  pl60: 'pl-60',
  pl100: 'pl-100',

  pr0: 'pr-0',
  pr10: 'pr-10',
  pr30: 'pr-30',
  pr60: 'pr-60',
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
  ...spacing,
} as const;

export type StyleKey = keyof typeof styles;
export type StyleValue = (typeof styles)[StyleKey];
