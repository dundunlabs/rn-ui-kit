import { mergeTheme } from "../utils"

import { defaultSpace } from "./space"
import { defaultColors } from "./colors"
import { defaultFontSizes } from "./fontSizes"

import { defaultGroupProps, defaultGroupStyles } from "./components/group"
import { AvatarTextProps, defaultAvatarProps, defaultAvatarStyles, defaultAvatarTextStyles } from "./components/avatar"
import { ButtonTextProps, ButtonTextStyles, defaultButtonProps, defaultButtonStyles, defaultButtonTextStyles } from "./components/button"
import { defaultTextProps, defaultTextStyles } from "./components/text"
import { defaultIconProps, defaultIconStyles } from "./components/icon"

import type { StyleProp } from "react-native"
import type { Space } from "./space"
import type { Colors } from "./colors"
import type { FontSize } from "./fontSizes"

import type { GroupProps, GroupStyles } from "./components/group"
import type { AvatarProps, AvatarStyles, AvatarTextStyles } from "./components/avatar"
import type { ButtonProps, ButtonStyles } from "./components/button"
import type { TextProps, TextStyles } from "./components/text"
import type { IconProps, IconStyles } from "./components/icon"

export type Subset<T> = {
  [k in keyof T]?: T[k] extends object
    ? Subset<T[k]>
    : T[k] extends object | null
      ? Subset<T[k]> | null
      : T[k] extends object | null | undefined
        ? Subset<T[k]> | null | undefined
        : T[k]
}

export type ComponentStylesFn<T, P, S> = (theme: T, props: P) => S

export type ComponentStyles<T, P, S> = S | ComponentStylesFn<T, P, S>

export type ComponentTheme<T, P, S> = {
  defaultProps: Partial<P>,
  styles: ComponentStyles<T, P, S>
}


export interface PropsWithStyle<S = any> {
  style?: StyleProp<S> | undefined
}

export interface Theme {
  space: Space
  colors: Colors
  fontSizes: Record<FontSize, number>
  components: {
    Group: ComponentTheme<Theme, GroupProps, GroupStyles>
    Avatar: ComponentTheme<Theme, AvatarProps, AvatarStyles>
    AvatarText: ComponentTheme<Theme, AvatarTextProps, AvatarTextStyles>
    Button: ComponentTheme<Theme, ButtonProps, ButtonStyles>
    ButtonText: ComponentTheme<Theme, ButtonTextProps, ButtonTextStyles>
    Text: ComponentTheme<Theme, TextProps, TextStyles>
    Icon: ComponentTheme<Theme, IconProps, IconStyles>
  }
}

type ComponentThemeSubset<T> = T extends ComponentTheme<Theme, infer P, infer S>
  ? ComponentTheme<Theme, Subset<P>, Subset<S>>
  : {}

export interface ThemeSubset extends Subset<Omit<Theme, 'components'>> {
  components?: {
    [k in keyof Theme['components']]?: Partial<ComponentThemeSubset<Theme['components'][k]>>
  }
}

export const defaultTheme: Theme = {
  space: defaultSpace,
  colors: defaultColors,
  fontSizes: defaultFontSizes,
  components: {
    Group: {
      defaultProps: defaultGroupProps,
      styles: defaultGroupStyles
    },
    Avatar: {
      defaultProps: defaultAvatarProps,
      styles: defaultAvatarStyles
    },
    AvatarText: {
      defaultProps: {},
      styles: defaultAvatarTextStyles
    },
    Button: {
      defaultProps: defaultButtonProps,
      styles: defaultButtonStyles
    },
    ButtonText: {
      defaultProps: {},
      styles: defaultButtonTextStyles
    },
    Text: {
      defaultProps: defaultTextProps,
      styles: defaultTextStyles
    },
    Icon: {
      defaultProps: defaultIconProps,
      styles: defaultIconStyles
    }
  }
}

export function createTheme(theme: ThemeSubset = {}): Theme {
  return mergeTheme(defaultTheme, theme)
}