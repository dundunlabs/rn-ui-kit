import type { ViewStyle, TextStyle } from "react-native";
import type { ComponentStyles, Theme } from "..";
import type { ColorStyle } from "../colors";
import type { FontSize } from "../fontSizes";

type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeContentProps {
  color?: ColorStyle
  size?: FontSize | number
  weight?: TextStyle['fontWeight']
}

export interface BadgeProps {
  hidden?: boolean
  inset?: number | `${number}%`
  color?: ColorStyle
  size?: BadgeSize | number
  position?: `${'bottom' | 'top'}-${'left' | 'right'}`,
  content?: React.ReactElement<BadgeContentProps>
  children: React.ReactNode
  style?: ViewStyle
  containerStyle?: ViewStyle
}

export interface BadgeStyles {
  sizes: Record<BadgeSize, number>
  textSizes: Record<BadgeSize, FontSize>
}

export const defaultBadgeProps: Partial<BadgeProps> = {
  color: 'primary',
  size: 'md',
  position: 'top-right'
}

export const defaultBadgeStyles: ComponentStyles<Theme, BadgeProps, BadgeStyles> = {
  sizes: {
    sm: 8,
    md: 12,
    lg: 16,
  },
  textSizes: {
    sm: 'xs',
    md: 'sm',
    lg: 'md',
  }
}