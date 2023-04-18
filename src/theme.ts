import { defaultAvatarProps, defaultAvatarStyles } from "./components/Avatar"
import type { AvatarProps, AvatarStyles } from "./components/Avatar"
import deepMerge from "./utils/deepMerge"

type Subset<K> = {
  [k in keyof K]?: K[k] extends object
    ? Subset<K[k]>
    : K[k] extends object | null
      ? Subset<K[k]> | null
      : K[k] extends object | null | undefined
        ? Subset<K[k]> | null | undefined
        : K[k]
}
interface ComponentTheme<P, S> {
  defaultProps: P
  styles: S
}

interface Theme {
  components: {
    Avatar: ComponentTheme<AvatarProps, AvatarStyles>
  }
}

type EmotionTheme = Partial<Theme>

declare module '@emotion/react' {
  interface Theme extends EmotionTheme {}
}

const defaultTheme: Theme = {
  components: {
    Avatar: {
      defaultProps: defaultAvatarProps,
      styles: defaultAvatarStyles
    }
  }
}

export function createTheme(theme: Subset<Theme> = {}): Theme {
  return deepMerge(defaultTheme, theme)
}