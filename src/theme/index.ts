import { mergeTheme } from "../utils"

import { defaultColors } from "./colors"
import { defaultSpace } from "./space"

import { AvatarTextProps, defaultAvatarProps, defaultAvatarStyles, defaultAvatarTextStyles } from "./components/avatar"
import { ButtonTextProps, ButtonTextStyles, defaultButtonProps, defaultButtonStyles, defaultButtonTextStyles } from "./components/button"
import { defaultGroupProps, defaultGroupStyles } from "./components/group"

import type { StyleProp } from "react-native"
import type { Colors } from "./colors"
import type { Space } from "./space"

import type { GroupProps, GroupStyles } from "./components/group"
import type { AvatarProps, AvatarStyles, AvatarTextStyles } from "./components/avatar"
import type { ButtonProps, ButtonStyles } from "./components/button"

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
  defaultProps: P,
  styles: ComponentStyles<T, P, S>
}


export interface PropsWithStyle<S = any> {
  style?: StyleProp<S> | undefined
}

export interface Theme {
  colors: Colors
  space: Space
  components: {
    Avatar: ComponentTheme<Theme, AvatarProps, AvatarStyles>
    AvatarText: ComponentTheme<Theme, AvatarTextProps, AvatarTextStyles>
    Button: ComponentTheme<Theme, ButtonProps, ButtonStyles>
    ButtonText: ComponentTheme<Theme, ButtonTextProps, ButtonTextStyles>
    Group: ComponentTheme<Theme, GroupProps, GroupStyles>
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
  colors: defaultColors,
  space: defaultSpace,
  components: {
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
    Group: {
      defaultProps: defaultGroupProps,
      styles: defaultGroupStyles
    }
  }
}

export function createTheme(theme: ThemeSubset = {}): Theme {
  return mergeTheme(defaultTheme, theme)
}