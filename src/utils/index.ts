import type { ComponentStyles, ComponentStylesFn } from "../types"

const isObject = <O>(obj: O) => !!(
  typeof obj === 'object' &&
  obj !== null &&
  !Array.isArray(obj)
)

export function deepMerge(a: any, b: any) {
  if (isObject(a) && isObject(b)) {
    const obj = { ...a }
    for (const [key, value] of Object.entries(b)) {
      obj[key] = deepMerge(obj[key], value)
    }

    return obj
  }

  return b
}

const isComponentStylesFn = <T, P, S>(styles: ComponentStyles<T, P, S>): styles is ComponentStylesFn<T, P, S> => typeof styles === 'function'

export function resolveComponentStyles<T, P, S>(styles: ComponentStyles<T, P, S>, theme: T, props: P) {
  if (isComponentStylesFn(styles)) return styles(theme, props)
  return styles
}