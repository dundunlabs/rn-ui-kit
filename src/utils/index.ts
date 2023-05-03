import type { GenericComponentStyles, ComponentStylesFn } from "../theme"

const isObject = <O>(obj: O) => !!(
  typeof obj === 'object' &&
  obj !== null &&
  !Array.isArray(obj)
)

export function mergeTheme(a: any, b: any, path: string[] = []) {
  const [ns, _, attr] = path

  if (ns === 'components' && attr === 'styles') {
    return function(...args: any) {
      let styles1 = a
      let styles2 = b
      if (typeof a === 'function') styles1 = a(...args)
      if (typeof b === 'function') styles2 = b(...args)

      return mergeTheme(styles1, styles2)
    }
  }

  if (isObject(a) && isObject(b)) {
    const obj = { ...a }
    for (const [key, value] of Object.entries(b)) {
      obj[key] = mergeTheme(obj[key], value, [...path, key])
    }

    return obj
  }

  return b
}

const isComponentStylesFn = <T, P, S>(styles: GenericComponentStyles<T, P, S>): styles is ComponentStylesFn<T, P, S> => typeof styles === 'function'

export function resolveComponentStyles<T, P, S>(styles: GenericComponentStyles<T, P, S>, theme: T, props: P) {
  if (isComponentStylesFn(styles)) return styles(theme, props)
  return styles
}