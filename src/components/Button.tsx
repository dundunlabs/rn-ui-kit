import React from "react";
import withDefaultProps from "../hocs/withDefaultProps";
import withStyle from "../hocs/withStyle";
import Text from "./Text";
import { Pressable } from "react-native";
import type { ButtonProps, ButtonTextProps} from "../theme/components/button";
import { resolveComponentStyles } from "../utils";

const ButtonText = withStyle(Text)<ButtonTextProps>((theme, props) => {
  const { components: { ButtonText: { styles: cStyles } } } = theme
  const { variant } = props
  const styles = resolveComponentStyles(cStyles, theme, props)

  return {
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
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.transparent,
    ...styles.variants[variant],
    ...styles.sizes[size],
    ...(disabled && styles.disabled)
  }
})

export default withDefaultProps(Button, 'Button')