import React from "react";
import withDefaultProps from "../hocs/withDefaultProps";
import withStyle from "../hocs/withStyle";
import { Pressable, Text } from "react-native";
import type { ButtonProps, ButtonTextProps} from "../theme/components/button";
import { resolveComponentStyles } from "../utils";
import { Colors } from "../theme/colors";

const ButtonText = withStyle(Text)<ButtonTextProps>((theme, props) => {
  const { colors, components: { ButtonText: { styles: cStyles } } } = theme
  const { variant, color = 'primary' } = props
  const styles = resolveComponentStyles(cStyles, theme, props)
  const c = color in colors ? colors[color as keyof Colors] : color

  return {
    color: c,
    ...(variant && styles.variants[variant])
  }
})

function UnstyledButton({ variant, color, children, ...props }: ButtonProps) {
  return (
    <Pressable {...props}>
      <ButtonText
        variant={variant}
        color={color}
      >
        {children}
      </ButtonText>
    </Pressable>
  )
}

const Button = withStyle(UnstyledButton)((theme, props) => {
  const { colors, components: { Button: { styles: cStyles } } } = theme
  const { variant = 'solid', size = 'md', disabled } = props
  const styles = resolveComponentStyles(cStyles, theme, props)

  return {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.transparent,
    ...styles.variants[variant],
    ...styles.sizes[size],
    ...(disabled && styles.disabled)
  }
})

export default withDefaultProps(Button, 'Button')