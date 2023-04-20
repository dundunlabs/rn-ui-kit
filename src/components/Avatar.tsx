import React, { useState } from "react"
import { Image, View, Text } from "react-native"
import withStyle from "../hocs/withStyle"
import withDefaultProps from "../hocs/withDefaultProps"
import type { AvatarProps } from "../theme/components/avatar"

const StyledImage = withStyle(Image)<{ error: boolean }>((_, { error }) => error ? {} : {
  width: '100%',
  height: '100%'
})

const StyledText = withStyle(Text)<Pick<AvatarProps, 'size'>>(({ colors, components }, { size }) => {
  const { styles } = components.AvatarText

  return {
    color: colors.white,
    ...(size && (
      typeof size === 'number'
        ? { fontSize: size / 2 }
        : styles.sizes[size]
    ))
  }
})

function UnstyledAvatar({ style, source, imageStyle, textStyle, size, renderText, placeholder, ...props }: AvatarProps) {
  const [error, setError] = useState(false)

  return (
    <View style={style}>
      {source && (
        <StyledImage
          {...props}
          style={imageStyle}
          error={error}
          source={source}
          onError={() => setError(true)}
        />
      )}
      {(!source || error) && (
        props.alt ? (
          <StyledText
            size={size}
            style={textStyle}
          >
            {renderText ? renderText(props.alt): props.alt}
          </StyledText>
        ) : (
          <StyledImage
            {...props}
            style={imageStyle}
            error={false}
            source={{ uri: placeholder }}
          />
        )
      )}
    </View>
  )
}

const Avatar = withStyle(UnstyledAvatar)(({ colors,  components}, { variant, size }) => {
  const { styles } = components.Avatar

  return {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray,
    ...(variant && styles.variants[variant]),
    ...(size && (
      typeof size === 'number'
        ? { width: size, height: size}
        : styles.sizes[size]
    ))
  }
})

export default withDefaultProps(Avatar, 'Avatar')