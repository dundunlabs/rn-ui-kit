import { List, Text } from 'rn-ui-kit'
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
      'List',
    ]
  },
  {
    title: 'Layout',
    data: [
      'Group'
    ]
  }
] as const

export default function Home({ navigation }: NativeStackScreenProps<MainRouteParamList>) {
  return (
    <List
      sections={sections}
      renderSectionHeader={({ section }) => (
        <List.SectionHeader>
          <Text size='lg' color="textHeadline">
            {section.title}
          </Text>
        </List.SectionHeader>
      )}
      renderItem={({ item }) => {
        return (
          <List.Item onPress={() => navigation.navigate(item)}>
            <Text>{item}</Text>
          </List.Item>
        )
      }}
    />
  )
}