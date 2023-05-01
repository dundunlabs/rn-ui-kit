import { Text as RNText } from "react-native";
import withDefaultProps from "../hocs/withDefaultProps";
import withStyle from "../hocs/withStyle";
import type { TextProps } from "../theme/components/text";
import type { Colors } from "../theme/colors";

const Text = withStyle(RNText)<TextProps>((theme, props) => {
  const { colors, fontSizes } = theme
  const { size = 'sm', color = 'textDefault', weight, leading } = props

  return {
    fontSize: typeof size === 'number' ? size : fontSizes[size],
    color: color in colors ? colors[color as keyof Colors] : color,
    ...(weight && { fontWeight: weight }),
    ...(leading && { lineHeight: leading })
  }
})

export default withDefaultProps(Text, 'Text')