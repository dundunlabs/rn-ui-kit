import { SectionList, Text } from "react-native"
import { Button } from 'rn-ui-kit'
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { MainRouteParamList } from "../routes"

const sections = [
  {
    title: 'Components',
    data: [
      'Avatar',
      'Button'
    ]
  },
  {
    title: 'Layout',
    data: [
      'Group'
    ]
  }
]

export default function Home({ navigation }: NativeStackScreenProps<MainRouteParamList>) {
  return (
    <SectionList
      sections={sections}
      renderSectionHeader={({ section }) => (
        <Text>{section.title}</Text>
      )}
      renderItem={({ item }) => {
        return (
          <Button
            onPress={() => navigation.navigate(item as keyof MainRouteParamList)}
          >
            {item}
          </Button>
        )
      }}
    />
  )
}