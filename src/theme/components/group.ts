import type { FlexStyle, ViewProps, ViewStyle } from "react-native";
import type { GenericComponentStyles, PropsWithStyle, Theme } from "..";

export type GroupChild = React.ReactElement<PropsWithStyle<FlexStyle>> | undefined

export interface GroupProps extends Omit<ViewProps, 'children'> {
  row?: boolean
  wrap?: boolean
  reverse?: boolean
  spacing?: number
  flex?: number
  align?: FlexStyle['alignItems']
  justify?: FlexStyle['justifyContent']
  children?: GroupChild[] | GroupChild
}

export interface GroupStyles {
  row?: ViewStyle
}

export const defaultGroupProps: GroupProps = {
}

export const defaultGroupStyles: GenericComponentStyles<Theme, GroupProps, GroupStyles> = {
}