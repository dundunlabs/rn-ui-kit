import { Container, withStyle } from "rn-ui-kit";
import { View } from "react-native";

const Rect = withStyle(View)({
  backgroundColor: 'gray',
  height: 80
})

export default function ContainerScreen() {
  return (
    <Container my={4}>
      <Rect />
    </Container>
  )
}