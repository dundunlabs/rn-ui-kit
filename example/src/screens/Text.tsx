import { ScrollView, View } from "react-native";
import { Group, Text } from 'rn-ui-kit'

export default function TextScreen() {
  return (
    <ScrollView>
      <View>
        <Text size='lg' color='textHeadline'>
          Sizes
        </Text>
        <Group row spacing={2}>
          <Text size='xs'>xs</Text>
          <Text>sm</Text>
          <Text size='md'>md</Text>
          <Text size='lg'>lg</Text>
          <Text size='xl'>xl</Text>
          <Text size='2xl'>2xl</Text>
          <Text size='3xl'>3xl</Text>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Colors
        </Text>
        <Group row spacing={2}>
          <Text>default</Text>
          <Text color='textHeadline'>headline</Text>
          <Text color='textMuted'>muted</Text>
          <Text color='primary'>primary</Text>
        </Group>
      </View>
    </ScrollView>
  )
}