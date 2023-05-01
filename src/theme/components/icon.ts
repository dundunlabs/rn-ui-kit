import type { ComponentStyles, Theme } from "..";
import type { ColorStyle } from "../colors";
import type { SvgProps } from "react-native-svg";
import type { FontSize } from "../fontSizes";

interface IconLoaderProps {
  icon: string
  iconSet?: string
  variant?: string
}
type IconLoader = (props: IconLoaderProps) => string

export interface IconProps extends SvgProps {
  icon: string
  iconSet?: string
  variant?: string
  color?: ColorStyle
  size?: FontSize | number | '100%'
  loader?: IconLoader
}

export interface IconStyles {
}

export const defaultIconProps: Partial<IconProps> = {
  color: 'primary',
  size: 'sm',
  variant: 'outline',
  iconSet: 'heroicons-24',
  loader: ({ icon, iconSet, variant }) => `https://svgstorage.vercel.app/icon-sets/${iconSet}/${variant}/${icon}.svg`
}

export const defaultIconStyles: ComponentStyles<Theme, IconProps, IconStyles> = {
}