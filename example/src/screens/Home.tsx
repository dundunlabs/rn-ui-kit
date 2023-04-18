import { Button, FlatList } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { MainRouteParamList } from "../routes"

const components = ['Avatar'] as const

export default function Home({ navigation }: NativeStackScreenProps<MainRouteParamList>) {
  return (
    <FlatList
      data={components}
      renderItem={({ item }) => {
        return (
          <Button
            title={item}
            onPress={() => navigation.navigate(item)}
          />
        )
      }}
    />
  )
}