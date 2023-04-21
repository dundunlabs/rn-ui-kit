import { ScrollView, Text, View } from 'react-native'
import { Group, Avatar } from 'rn-ui-kit'

export default function AvatarScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Variants</Text>
        <Group row spacing={2}>
          <Avatar
            source={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}
          />
          <Avatar
            variant='rounded'
            source={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }}
          />
          <Avatar
            variant='square'
            source={{ uri: 'https://mui.com/static/images/avatar/3.jpg' }}
          />
        </Group>
      </View>

      <View>
        <Text>Sizes</Text>
        <Group row spacing={2}>
          <Avatar
            size='sm'
            source={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}
          />
          <Avatar
            source={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }}
          />
          <Avatar
            size='lg'
            source={{ uri: 'https://mui.com/static/images/avatar/3.jpg' }}
          />
          <Avatar
            size={56}
            source={{ uri: 'https://mui.com/static/images/avatar/4.jpg' }}
          />
        </Group>
      </View>

      <View>
        <Text>Letters</Text>
        <Group row spacing={2}>
          <Avatar
            alt='John Doe'
          />
          <Avatar
            alt='Doe John'
            style={{ backgroundColor: '#4f46e5' }}
          />
        </Group>
      </View>

      <View>
        <Text>Fallbacks</Text>
        <Group row spacing={2}>
          <Avatar
            source={{ uri: 'https://mui.com/static/images/avatar/broken-image.jpg' }}
            alt='John Doe'
          />
          <Avatar
            source={{ uri: 'https://mui.com/static/images/avatar/broken-image.jpg' }}
          />
        </Group>
      </View>
    </ScrollView>
  )
}