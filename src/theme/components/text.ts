import type { TextProps as RNTextProps, TextStyle } from "react-native";
import type { GenericComponentStyles, Theme } from "..";
import type { ColorStyle } from "../colors";
import { FontSize } from "../fontSizes";

export interface TextProps extends RNTextProps {
  color?: ColorStyle
  size?: FontSize | number
  weight?: TextStyle['fontWeight']
  leading?: number
}

export interface TextStyles {
}

export const defaultTextProps: Partial<TextProps> = {
  color: 'textDefault',
  size: 'sm'
}

export const defaultTextStyles: GenericComponentStyles<Theme, TextProps, TextStyles> = {
}