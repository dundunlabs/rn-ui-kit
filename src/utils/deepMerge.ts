const isObject = <O>(obj: O) => !!(
  typeof obj === 'object' &&
  obj !== null &&
  !Array.isArray(obj)
)

export default function deepMerge(a: any, b: any) {
  if (isObject(a) && isObject(b)) {
    const obj = { ...a }
    for (const [key, value] of Object.entries(b)) {
      obj[key] = deepMerge(obj[key], value)
    }

    return obj
  }

  return b
}