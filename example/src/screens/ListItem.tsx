import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet } from "react-native";
import { ListItem, Text } from "rn-ui-kit";
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

export default function ListItemScreen({ navigation }: NativeStackScreenProps<MainRouteParamList>) {
  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item }) => (
        <ListItem onPress={() => navigation.navigate(item.screen)}>
          <Text>{item.title}</Text>
        </ListItem>
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8
  }
})