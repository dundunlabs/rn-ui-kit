import type { ViewStyle, PressableProps, ViewProps } from "react-native"
import { GroupChild, GroupProps } from "./group"

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

export interface ListItemProps extends CommonListProps, Omit<PressableProps, 'children' | 'style'> {
  left?: GroupChild
  right?: GroupChild
  style?: ViewStyle
  children: React.ReactNode
}

export const defaultListItemProps: Partial<ListItemProps> = {}

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

export interface ListSectionHeaderProps extends CommonListProps, GroupProps {}

export const defaultListSectionHeaderProps: Partial<ListSectionHeaderProps> = {}

export interface ListSectionHeaderStyles {
  sizes: Record<ListSize, ViewStyle>
}

export const defaultListSectionHeaderStyles: ListSectionHeaderStyles = {
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