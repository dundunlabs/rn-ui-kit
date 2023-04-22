import { ScrollView, View } from "react-native";
import { Group, Text } from 'rn-ui-kit'

export default function GroupScreen() {
  return (
    <ScrollView>
      <View>
        <Text size='lg' color='textHeadline'>
          Column
        </Text>
        <Group>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Row
        </Text>
        <Group row>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Spacing
        </Text>
        <Group row spacing={2}>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
      </View>
    </ScrollView>
  )
}