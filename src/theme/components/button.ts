import React from "react";
import type { PressableProps, TextStyle, ViewStyle } from "react-native";
import type { ColorStyle, Colors } from "../colors";
import type { Theme, ComponentStyles } from "..";
import type { TextProps } from "./text";

export type ButtonVariant = 'solid' | 'outlined' | 'text'
export type ButtonSize = 'sm' | 'md' | 'lg'
export interface ButtonProps extends Omit<PressableProps, 'children'> {
  variant?: ButtonVariant
  color?: ColorStyle
  size?: ButtonSize
  children?: React.ReactNode
}
export interface ButtonStyles {
  variants: Record<ButtonVariant, ViewStyle | null>
  sizes: Record<ButtonSize, ViewStyle | null>
  disabled: ViewStyle | null
}
export type ButtonTextProps = TextProps & Pick<ButtonProps, 'variant'>
export interface ButtonTextStyles {
  variants: Record<ButtonVariant, TextStyle | null>
}

export const defaultButtonProps: ButtonProps = {
  variant: 'solid',
  color: 'primary',
  size: 'md'
}

export const defaultButtonStyles: ComponentStyles<Theme, ButtonProps, ButtonStyles> = ({ colors, space }, { color = 'primary' }) => {
  const c = color in colors ? colors[color as keyof Colors] : color

  return {
    variants: {
      solid: {
        backgroundColor: c,
        borderColor: c
      },
      outlined: {
        borderColor: c
      },
      text: null
    },
    sizes: {
      sm: {
        paddingVertical: space(0.5),
        paddingHorizontal: space(3)
      },
      md: {
        paddingVertical: space(1),
        paddingHorizontal: space(4)
      },
      lg: {
        paddingVertical: space(1.5),
        paddingHorizontal: space(6)
      }
    },
    disabled: {
      opacity: 0.5
    }
  }
}

export const defaultButtonTextStyles: ComponentStyles<Theme, ButtonTextProps, ButtonTextStyles> = ({ colors }, {}) => ({
  variants: {
    solid: {
      color: colors.white
    },
    outlined: null,
    text: null
  }
})