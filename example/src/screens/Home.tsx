import { FlatList } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { MainRouteParamList } from "../routes"
import { Button } from 'rn-ui-kit'

const components = [
  'Avatar',
  'Button'
] as const

export default function Home({ navigation }: NativeStackScreenProps<MainRouteParamList>) {
  return (
    <FlatList
      data={components}
      renderItem={({ item }) => {
        return (
          <Button
            onPress={() => navigation.navigate(item)}
          >
            {item}
          </Button>
        )
      }}
    />
  )
}