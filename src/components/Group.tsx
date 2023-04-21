import React, { cloneElement, isValidElement } from "react";
import { View } from "react-native";
import withDefaultProps from "../hocs/withDefaultProps";
import withStyle from "../hocs/withStyle";
import { resolveComponentStyles } from "../utils";
import { GroupProps } from "../theme/components/group";
import useTheme from "../hooks/useTheme";
import type { FlexStyle } from "react-native";

function UnstyledGroup({ row, spacing = 0, children, ...props }: GroupProps) {
  const { space } = useTheme()

  return (
    <View {...props}>
      {React.Children.map(children, (child, idx) => {
        if (!isValidElement(child) || idx === 0) return child

        const margin = row ? 'marginLeft' : 'marginTop'
        return cloneElement(child, {
          style: [{[margin]: space(spacing)}, child.props.style]
        })
      })}
    </View>
  )
}

const Group = withStyle(UnstyledGroup)((theme, props) => {
  const { components: { Group: { styles: cStyles } } } = theme
  const { row, reverse, wrap, align, justify } = props
  const _ = resolveComponentStyles(cStyles, theme, props)

  return {
    alignItems: align,
    justifyContent: justify,
    flexDirection: ((row ? 'row' : 'column') + (reverse ? '-reverse' : '')) as FlexStyle['flexDirection'],
    ...(wrap && { flexWrap: 'wrap' })
  }
})

export default withDefaultProps(Group, 'Group')