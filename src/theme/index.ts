import deepMerge from "../utils/deepMerge"

import { defaultColors } from "./colors"
import type { Colors } from "./colors"

import { defaultAvatarProps, defaultAvatarStyles, defaultAvatarTextStyles } from "./components/avatar"
import type { AvatarProps, AvatarStyles, AvatarTextStyles } from "./components/avatar"
import { defaultButtonProps } from "./components/button"
import type { ButtonProps } from "./components/button"

type Subset<K> = {
  [k in keyof K]?: K[k] extends object
    ? Subset<K[k]>
    : K[k] extends object | null
      ? Subset<K[k]> | null
      : K[k] extends object | null | undefined
        ? Subset<K[k]> | null | undefined
        : K[k]
}

type ComponentTheme<P, S> = P extends undefined
  ? { defaultProps?: P, styles: S }
  : { defaultProps: P, styles: S }

export interface Theme {
  colors: Colors
  components: {
    Avatar: ComponentTheme<AvatarProps, AvatarStyles>
    AvatarText: ComponentTheme<undefined, AvatarTextStyles>
    Button: ComponentTheme<ButtonProps, {}>
  }
}

export const defaultTheme: Theme = {
  colors: defaultColors,
  components: {
    Avatar: {
      defaultProps: defaultAvatarProps,
      styles: defaultAvatarStyles
    },
    AvatarText: {
      styles: defaultAvatarTextStyles
    },
    Button: {
      defaultProps: defaultButtonProps,
      styles: {}
    }
  }
}

export function createTheme(theme: Subset<Theme> = {}): Theme {
  return deepMerge(defaultTheme, theme)
}