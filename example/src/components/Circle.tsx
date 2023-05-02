import { View } from "react-native"
import { withStyle } from "rn-ui-kit"

const Circle = withStyle(View)({
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: 'gray'
})

export default Circle