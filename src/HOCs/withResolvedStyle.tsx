import React from "react";
import withStyle from "./withStyle";
import type { Theme, PropsWithStyle, ComponentName, ComponentStyles } from "../theme";
import type { ComponentStyle } from "./withStyle";
import { resolveComponentStyles } from "../utils";

type ResolveStyle<S, P, R> = (styles: S, theme: Theme, props: P) => R

export default function withResolvedStyle<
  P extends PropsWithStyle,
  K extends ComponentName
>(Component: React.ComponentType<P>, name: K) {
  return function styles<SP>(resolveStyle: ResolveStyle<ComponentStyles<K>, P & SP, ComponentStyle<P>>) {
    return withStyle(Component)<SP>((theme, props) => {
      const styles = resolveComponentStyles(theme.components[name].styles, theme, props) as ComponentStyles<K>
      return resolveStyle(styles, theme, props)
    })
  }
}