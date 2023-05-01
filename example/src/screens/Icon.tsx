import { ScrollView, View } from "react-native";
import { Group, Text, Icon } from 'rn-ui-kit'

export default function IconScreen() {
  return (
    <ScrollView>
      <View>
        <Text size='lg' color='textHeadline'>
          Variants
        </Text>
        <Group row spacing={2}>
          <Icon icon="user" />
          <Icon icon="user" variant="solid" />
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Colors
        </Text>
        <Group row spacing={2}>
          <Icon icon="user" />
          <Icon icon="archive-box" color='secondary' />
          <Icon icon="academic-cap" color='black' />
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Sizes
        </Text>
        <Group row spacing={2}>
          <Icon icon="user" size='xs' />
          <Icon icon="archive-box" />
          <Icon icon="arrow-path-rounded-square" size='md' />
          <Icon icon="academic-cap" size='lg' />
          <Icon icon="arrow-right-on-rectangle" size='xl' />
          <Icon icon="banknotes" size='2xl' />
          <Icon icon="bell-alert" size='3xl' />
        </Group>
      </View>
    </ScrollView>
  )
}