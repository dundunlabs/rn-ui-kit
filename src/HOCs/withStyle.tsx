import React, { useMemo } from "react";
import useTheme from "../hooks/useTheme";
import type { Theme, PropsWithStyle } from "../theme";
import type { StyleProp } from "react-native";

type ComponentStyle<P extends PropsWithStyle> = P['style'] extends StyleProp<infer S> ? S : undefined

type StyleFn<S, P> = (theme: Theme, props: P) => S

const isStyleFn = <S, P>(style: S | StyleFn<S, P>): style is StyleFn<S, P> => typeof style === 'function'

export default function withStyle<P extends PropsWithStyle>(Component: React.ComponentType<P>) {
  return function styles<SP>(style: ComponentStyle<P> | StyleFn<ComponentStyle<P>, P & SP>) {
    return function ComponentWithStyle(props: P & SP) {
      const theme = useTheme()

      const mergedStyle = useMemo(() => {
        const style1 = isStyleFn(style) ? style(theme, props) : style
        const style2 = props.style
        return [style1, style2]
      }, [theme, props])

      return (
        <Component
          {...props}
          style={mergedStyle}
        />
      )
    }
  }
  }