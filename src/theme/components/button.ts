import React from "react";
import type { PressableProps, TextStyle } from "react-native";
import type { Colors } from "../colors";

export type ButtonVariant = 'solid' | 'outlined' | 'text'
export interface ButtonProps extends Omit<PressableProps, 'children'> {
  variant?: ButtonVariant
  color?: keyof Colors
  children?: React.ReactNode
}
export interface ButtonTextStyles {
  variants: Record<ButtonVariant, TextStyle | null>
}

export const defaultButtonProps: ButtonProps = {
  variant: 'solid',
  color: 'primary'
}
