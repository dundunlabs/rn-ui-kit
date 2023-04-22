import { ScrollView, Text, View } from "react-native";
import { Group } from 'rn-ui-kit'

export default function GroupScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Column</Text>
        <Group>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
      </View>

      <View>
        <Text>Row</Text>
        <Group row>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
      </View>

      <View>
        <Text>Spacing</Text>
        <Group row spacing={2}>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
      </View>
    </ScrollView>
  )
}