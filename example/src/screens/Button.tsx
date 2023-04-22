import { Alert, ScrollView, View } from 'react-native'
import { Group, Button, Text } from 'rn-ui-kit'

export default function ButtonScreen() {
  return (
    <ScrollView>
      <View>
        <Text size='lg' color='textHeadline'>
          Variants
        </Text>
        <Group row spacing={2}>
          <Button
            onPress={() => Alert.alert('Hello world!')}
          >
            Solid
          </Button>
          <Button
            variant='outlined'
            onPress={() => Alert.alert('Hello world!')}
          >
            Outlined
          </Button>
          <Button
            variant='text'
            onPress={() => Alert.alert('Hello world!')}
          >
            Text
          </Button>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Sizes
        </Text>
        <Group row spacing={2} align='flex-start'>
          <Button
            size='sm'
            onPress={() => Alert.alert('Hello world!')}
          >
            sm
          </Button>
          <Button
            onPress={() => Alert.alert('Hello world!')}
          >
            md
          </Button>
          <Button
            size='lg'
            onPress={() => Alert.alert('Hello world!')}
          >
            lg
          </Button>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Colors
        </Text>
        <Group row spacing={2}>
          <Button
            onPress={() => Alert.alert('Hello world!')}
          >
            Primary
          </Button>
          <Button
            color='secondary'
            onPress={() => Alert.alert('Hello world!')}
          >
            Secondary
          </Button>
          <Button
            color='gray'
            onPress={() => Alert.alert('Hello world!')}
          >
            Gray
          </Button>
          <Button
            color='#d97706'
            onPress={() => Alert.alert('Hello world!')}
          >
            #d97706
          </Button>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Disabled
        </Text>
        <Group row spacing={2}>
          <Button
            disabled
            onPress={() => Alert.alert('Hello world!')}
          >
            Disabled
          </Button>
        </Group>
      </View>
    </ScrollView>
  )
}