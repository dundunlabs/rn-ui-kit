import { deepMerge } from "../utils"

import { defaultColors } from "./colors"
import { defaultSpace } from "./space"

import { AvatarTextProps, defaultAvatarProps, defaultAvatarStyles, defaultAvatarTextStyles } from "./components/avatar"
import { ButtonTextProps, ButtonTextStyles, defaultButtonProps, defaultButtonStyles, defaultButtonTextStyles } from "./components/button"

import type { Subset, ComponentTheme } from "../types"

import type { Colors } from "./colors"
import type { Space } from "./space"

import type { AvatarProps, AvatarStyles, AvatarTextStyles } from "./components/avatar"
import type { ButtonProps, ButtonStyles } from "./components/button"

export interface Theme {
  colors: Colors
  space: Space
  components: {
    Avatar: ComponentTheme<Theme, AvatarProps, AvatarStyles>
    AvatarText: ComponentTheme<Theme, AvatarTextProps, AvatarTextStyles>
    Button: ComponentTheme<Theme, ButtonProps, ButtonStyles>
    ButtonText: ComponentTheme<Theme, ButtonTextProps, ButtonTextStyles>
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
    }
  }
}

export function createTheme(theme: Subset<Theme> = {}): Theme {
  return deepMerge(defaultTheme, theme)
}