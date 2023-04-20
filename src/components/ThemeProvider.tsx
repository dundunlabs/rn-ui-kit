import React from 'react'
import ThemeContext from '../contexts/theme'
import type { Theme } from '../theme'

interface Props {
  theme: Theme
}

export default function ThemeProvider({ theme, children }: React.PropsWithChildren<Props>) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}