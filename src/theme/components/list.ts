import type { ViewStyle, PressableProps } from "react-native"
import { GroupChild } from "./group"

type ListSize = 'sm' | 'md' | 'lg'

export interface CommonListProps {
  size?: ListSize
}

export const defaultListProps: Partial<CommonListProps> = {
  size: 'lg'
}

export interface ListStyles {
  sizes: Record<ListSize, ViewStyle>
}

export const defaultListStyles: ListStyles = {
  sizes: {
    sm: {
      paddingVertical: 4,
    },
    md: {
      paddingVertical: 6,
    },
    lg: {
      paddingVertical: 8,
    }
  }
}

export interface ListItemProps extends Omit<PressableProps, 'children' | 'style'> {
  size?: ListSize
  left?: GroupChild
  right?: GroupChild
  style?: ViewStyle
  children: React.ReactNode
}

export const defaultListItemProps: Partial<ListItemProps> = {
  size: 'lg'
}

export interface ListItemStyles {
  sizes: Record<ListSize, ViewStyle>
}

export const defaultListItemStyles: ListItemStyles = {
  sizes: {
    sm: {
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    md: {
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    lg: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    }
  }
}