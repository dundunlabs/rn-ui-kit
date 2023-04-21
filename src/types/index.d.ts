export type ComponentStylesFn<T, P, S> = (theme: T, props: P) => S

export type ComponentStyles<T, P, S> = S | ComponentStylesFn<T, P, S>

export type ComponentTheme<T, P, S> = P extends undefined
  ? { defaultProps?: P, styles: ComponentStyles<T, P, S> }
  : { defaultProps: P, styles: ComponentStyles<T, P, S> }

export type Subset<K> = {
  [k in keyof K]?: K[k] extends object
    ? Subset<K[k]>
    : K[k] extends object | null
      ? Subset<K[k]> | null
      : K[k] extends object | null | undefined
        ? Subset<K[k]> | null | undefined
        : K[k]
}