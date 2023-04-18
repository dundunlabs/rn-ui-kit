import { Image } from "react-native"
import styled from '@emotion/native'
import type { ImageStyle } from "react-native"

type AvatarVariant = 'circular' | 'rounded' | 'square'
type AvatarSize = 'sm' | 'md' | 'lg'

export interface AvatarStyles {
  variants: Record<AvatarVariant, ImageStyle | null>
  sizes: Record<AvatarSize, ImageStyle | null>
}

export const defaultAvatarStyles: AvatarStyles = {
  variants: {
    circular: {
      borderRadius: 9999
    },
    rounded: {
      borderRadius: 4
    },
    square: null
  },
  sizes: {
    sm: {
      width: 32,
      height: 32
    },
    md: {
      width: 40,
      height: 40
    },
    lg: {
      width: 48,
      height: 48
    }
  }
}

export interface AvatarProps {
  variant?: AvatarVariant
  size?: AvatarSize
}

export const defaultAvatarProps: AvatarProps = {
  variant: 'circular',
  size: 'md'
}

const Avatar = styled(Image)<AvatarProps>(({ theme, ...props }) => {
  const {
    styles = defaultAvatarStyles,
    defaultProps = defaultAvatarProps
  } = theme.components?.Avatar || {}
  const { variant, size } = { ...defaultProps, ...props }

  return {
    ...(variant && styles.variants[variant]),
    ...(size && styles.sizes[size])
  }
})

export default Avatar