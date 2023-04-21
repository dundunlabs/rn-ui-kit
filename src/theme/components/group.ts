import type { FlexStyle, ViewProps, ViewStyle } from "react-native";
import type { ComponentStyles, PropsWithStyle } from "../../types";
import type { Theme } from "..";

export interface GroupProps extends Omit<ViewProps, 'children'> {
  row?: boolean
  wrap?: boolean
  reverse?: boolean
  spacing?: number
  align?: FlexStyle['alignItems']
  justify?: FlexStyle['justifyContent']
  children?: React.ReactElement<PropsWithStyle<FlexStyle>>[] | React.ReactElement<PropsWithStyle<FlexStyle>>
}

export interface GroupStyles {
  row?: ViewStyle
}

export const defaultGroupProps: GroupProps = {
}

export const defaultGroupStyles: ComponentStyles<Theme, GroupProps, GroupStyles> = {
}