import { Alert, ScrollView, Text, View } from 'react-native'
import { Button } from 'rn-ui-kit'

export default function ButtonScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Variants</Text>
        <View style={{ flexDirection: 'row' }}>
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
        </View>
      </View>

      <View>
        <Text>Sizes</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
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
        </View>
      </View>

      <View>
        <Text>Colors</Text>
        <View style={{ flexDirection: 'row' }}>
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
        </View>
      </View>

      <View>
        <Text>Disabled</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button
            disabled
            onPress={() => Alert.alert('Hello world!')}
          >
            Disabled
          </Button>
        </View>
      </View>
    </ScrollView>
  )
}