import React from 'react'
import useTheme from '../hooks/useTheme'
import type { Theme } from '../theme'

export default function withDefaultProps<P>(Component: React.ComponentType<P>, name: keyof Theme['components']) {
  return function ComponentWithDefaultProps(props: P) {
    const theme = useTheme()
    const { defaultProps } = theme.components[name]

    return (
      <Component
        {...defaultProps}
        {...props}
      />
    )
  }
}