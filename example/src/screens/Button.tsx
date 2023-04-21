import { Alert, ScrollView, Text, View } from 'react-native'
import { Group, Button } from 'rn-ui-kit'

export default function ButtonScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Variants</Text>
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
        <Text>Sizes</Text>
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
        <Text>Colors</Text>
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
        <Text>Disabled</Text>
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