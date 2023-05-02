import { View } from "react-native"
import { withStyle } from "rn-ui-kit"

const Rectangle = withStyle(View)({
  width: 40,
  height: 40,
  backgroundColor: 'gray'
})

export default Rectangle