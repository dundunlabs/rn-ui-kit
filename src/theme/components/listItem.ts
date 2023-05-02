import React from "react"
import type { PressableProps } from "react-native"
import { GroupChild } from "./group"

export interface ListItemProps extends Omit<PressableProps, 'children'> {
  left?: GroupChild
  right?: GroupChild
  children: React.ReactNode
}

export const defaultListItemProps: Partial<ListItemProps> = {}