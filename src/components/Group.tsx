import React, { cloneElement, isValidElement } from "react";
import { View } from "react-native";
import withDefaultProps from "../hocs/withDefaultProps";
import type { GroupProps } from "../theme/components/group";
import useTheme from "../hooks/useTheme";
import type { FlexStyle } from "react-native";
import withResolvedStyle from "../hocs/withResolvedStyle";

function UnstyledGroup({ row, spacing = 0, children, ...props }: GroupProps) {
  const { space } = useTheme()
  const validElementIndexes: Record<number, boolean> = {}

  return (
    <View {...props}>
      {React.Children.map(children, (child, idx) => {
        validElementIndexes[idx] = !!child
        if (
          !isValidElement(child) ||
          idx === 0 ||
          !validElementIndexes[idx - 1]
        ) return child

        const margin = row ? 'marginLeft' : 'marginTop'
        return cloneElement(child, {
          style: [{[margin]: space(spacing)}, child.props.style]
        })
      })}
    </View>
  )
}

const Group = withResolvedStyle(UnstyledGroup, 'Group')((_, theme, props) => {
  const { space } = theme
  const { row, reverse, wrap, align, justify, flex, px, py, mx, my } = props

  return {
    flex,
    alignItems: align,
    justifyContent: justify,
    flexDirection: ((row ? 'row' : 'column') + (reverse ? '-reverse' : '')) as FlexStyle['flexDirection'],
    ...(wrap && { flexWrap: 'wrap' }),
    ...(px && { paddingHorizontal: space(px) }),
    ...(py && { paddingVertical: space(py) }),
    ...(mx && { marginHorizontal: space(mx) }),
    ...(my && { marginVertical: space(my) })
  }
})

export default withDefaultProps(Group, 'Group')