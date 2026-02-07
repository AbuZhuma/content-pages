export const styles = {
  lts: 'large-text-size',
  ltw: 'large-text-weight',
  mts: 'middle-text-size',
  mtw: 'middle-text-weight',
  sts: 'small-text-size',
  stw: 'small-text-weight',
  tc: 'text-center',
  tl: 'text-left',
  tr: 'text-right',
} as const;

export type StyleKey = keyof typeof styles;

export type StyleValue = (typeof styles)[StyleKey];
