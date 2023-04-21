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
        <View style={{ flexDirection: 'row' }}>

        </View>
      </View>

      <View>
        <Text>Letters</Text>
        <View style={{ flexDirection: 'row' }}>

        </View>
      </View>

      <View>
        <Text>Fallbacks</Text>
        <View style={{ flexDirection: 'row' }}>

        </View>
      </View>
    </ScrollView>
  )
}