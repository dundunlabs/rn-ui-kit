export interface Colors {
  white: string
  black: string
  gray: string
  background: string
  primary: string
  secondary: string
  transparent: string
  textDefault: string
  textHeadline: string
  textMuted: string
  divider: string
}

export type ColorStyle = keyof Colors | `#${string}`

export const defaultColors: Colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#d1d5db',
  background: '#ffffff',
  primary: '#0891b2',
  secondary: '#7c3aed',
  transparent: 'transparent',
  textDefault: '#374151',
  textHeadline: '#111827',
  textMuted: '#6b7280',
  divider: '#f3f4f6'
}