import { createTheme } from 'rn-ui-kit'
import { DefaultTheme } from '@react-navigation/native'
import type { Theme } from '@react-navigation/native'

const theme = createTheme()

export const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
}
export default theme