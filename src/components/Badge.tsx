import React, { cloneElement, isValidElement } from "react";
import withDefaultProps from "../hocs/withDefaultProps";
import withStyle from "../hocs/withStyle";
import type { BadgeProps } from "../theme/components/badge";
import { View } from "react-native";
import { resolveComponentStyles } from "../utils";
import type { Colors } from "../theme/colors";
import useTheme from "../hooks/useTheme";

function UnstyledBadge(props: BadgeProps) {
  const theme = useTheme()
  const { children, content, hidden, style, containerStyle, size = 'md' } = props
  const { components: { Badge: { styles } } } = theme
  const { textSizes } = resolveComponentStyles(styles, theme, props)

  return (
    <View style={containerStyle}>
      {children}
      {!hidden && (
        <View style={style}>
          {isValidElement(content) ? cloneElement(content, {
            weight: content.props.weight || '500',
            color: content.props.color || 'white',
            size: content.props.size || (typeof size === 'number' ? (size + 4) : textSizes[size]),
          }) : content}
        </View>
      )}
    </View>
  )
}

const Badge = withStyle(UnstyledBadge)((theme, props) => {
  const { colors, components: { Badge: { styles: cStyles } } } = theme
  const { color, content, inset = 0, position = 'top-right' } = props
  const styles = resolveComponentStyles(cStyles, theme, props)
  const [py, px] = position.split('-')
  let size = props.size || 'md'
  if (typeof size !== 'number') size = styles.sizes[size]
  if (!!content) size += 8
  size += 4 // add border

  return {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
    borderWidth: 2,
    minWidth: size,
    minHeight: size,
    borderRadius: size / 2,
    ...(color && {
      backgroundColor: color in colors ? colors[color as keyof Colors] : color
    }),
    [px]: inset,
    [py]: inset,
    transform: [
      { translateX: size / 2 * (px === 'right' ? 1 : -1) },
      { translateY: size / 2 * (py === 'bottom' ? 1 : -1) }
    ]
  }
})

export default withDefaultProps(Badge, 'Badge')