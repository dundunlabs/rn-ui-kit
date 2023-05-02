import { ScrollView, View } from "react-native";
import { Group, Text, Divider } from 'rn-ui-kit'
import Rectangle from "../components/Rectangle";

export default function DividerScreen() {
  return (
    <ScrollView>
      <View>
        <Text size='lg' color='textHeadline'>
          Horizontal
        </Text>
        <Group spacing={2}>
          <Rectangle />
          <Divider />
          <Rectangle />
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Vertical
        </Text>
        <Group row spacing={2} align="center">
          <Rectangle />
          <Divider vertical />
          <Rectangle />
        </Group>
      </View>
    </ScrollView>
  )
}