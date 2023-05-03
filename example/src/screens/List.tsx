import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, List } from "rn-ui-kit";
import { MainRouteParamList } from "../routes";

const data = [
  {
    title: 'Basic list',
    screen: 'BasicList'
  },
  {
    title: 'List decorator',
    screen: 'ListDecorator'
  }
] as const

export default function ListScreen({ navigation }: NativeStackScreenProps<MainRouteParamList>) {
  return (
    <List
      data={data}
      renderItem={({ item }) => (
        <List.Item onPress={() => navigation.navigate(item.screen)}>
          <Text>{item.title}</Text>
        </List.Item>
      )}
    />
  )
}
