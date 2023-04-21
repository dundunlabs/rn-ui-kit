import React from "react";
import withDefaultProps from "../hocs/withDefaultProps";
import withStyle from "../hocs/withStyle";
import { Pressable, Text } from "react-native";
import type { ButtonProps} from "../theme/components/button";

const ButtonText = withStyle(Text)<Pick<ButtonProps, 'variant' | 'color'>>(({ colors }, { variant, color = 'primary' }) => ({
  color: colors[variant !== 'solid' ? color : 'white']
}))

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

const Button = withStyle(UnstyledButton)(({ colors }, { variant, color = 'primary' }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: colors[variant === 'outlined' ? color : 'transparent'],
  ...(variant === 'solid' && {
    backgroundColor: colors[color]
  }),
}))

export default withDefaultProps(Button, 'Button')