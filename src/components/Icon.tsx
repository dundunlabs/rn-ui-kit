import React, { useMemo } from "react"
import { SvgUri } from "react-native-svg"
import withStyle from "../hocs/withStyle"
import type { IconProps } from "../theme/components/icon"
import withDefaultProps from "../hocs/withDefaultProps"
import { resolveComponentStyles } from "../utils"
import useTheme from "../hooks/useTheme"
import type { Colors } from "../theme/colors"

function Icon({ color, size, icon, iconSet, variant, loader, ...props }: IconProps) {
  const { colors, fontSizes } = useTheme()
  const uri = useMemo(() => loader ? loader({ icon, iconSet, variant }) : '', [loader, icon, iconSet, variant])
  const fontSize = size ? (typeof size === 'number' ? size : fontSizes[size]) : undefined

  return (
    <SvgUri
      uri={uri}
      {...(color && {
        color:  color in colors ? colors[color as keyof Colors] : color
      })}
      {...(fontSize && {
        width: fontSize,
        height: fontSize
      })}
      {...props}
    />
  )
}

const UnstyledIcon = withStyle(Icon)((theme, props) => {
  const { components: { Icon: { styles: cStyles } } } = theme
  const styles = resolveComponentStyles(cStyles, theme, props)

  return {
    ...styles,
  }
})

export default withDefaultProps(UnstyledIcon, 'Icon')