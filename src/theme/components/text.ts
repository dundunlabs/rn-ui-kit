import type { TextProps as RNTextProps } from "react-native";
import type { ComponentStyles, Theme } from "..";
import type { ColorStyle } from "../colors";
import { FontSize } from "../fontSizes";

export interface TextProps extends RNTextProps {
  color?: ColorStyle
  size?: FontSize | number
}

export interface TextStyles {
}

export const defaultTextProps: TextProps = {
  color: 'textDefault',
  size: 'sm'
}

export const defaultTextStyles: ComponentStyles<Theme, TextProps, TextStyles> = {
}