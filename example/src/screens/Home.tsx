import { SectionList } from "react-native"
import { Button, Text } from 'rn-ui-kit'
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { MainRouteParamList } from "../routes"

const sections = [
  {
    title: 'Components',
    data: [
      'Avatar',
      'Button',
      'Text',
      'Icon',
      'Badge',
      'Divider',
      'ListItem',
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
        <Text size='lg' color="textHeadline">
          {section.title}
        </Text>
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