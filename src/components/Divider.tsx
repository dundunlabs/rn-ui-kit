import { View } from "react-native";
import withStyle from "../hocs/withStyle";
import withDefaultProps from "../hocs/withDefaultProps";
import { DividerProps } from "../theme/components/divider";

const Divider = withStyle(View)<DividerProps>(({ colors }, { vertical }) => {
  return {
    backgroundColor: colors.divider,
    alignSelf: 'stretch',
    [vertical ? 'width': 'height']: 1
  }
})

export default withDefaultProps(Divider, 'Divider')