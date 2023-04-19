import { FlatList, Text, View } from 'react-native'
import { Avatar } from 'rn-ui-kit'

const data = [
  {
    title: 'Variants',
    data: [
      {
        variant: 'circular',
        uri: 'https://mui.com/static/images/avatar/1.jpg'
      },
      {
        variant: 'rounded',
        uri: 'https://mui.com/static/images/avatar/1.jpg'
      },
      {
        variant: 'square',
        uri: 'https://mui.com/static/images/avatar/1.jpg'
      }
    ]
  },
  {
    title: 'Sizes',
    data: [
      {
        size: 'sm',
        uri: 'https://mui.com/static/images/avatar/1.jpg'
      },
      {
        size: 'md',
        uri: 'https://mui.com/static/images/avatar/1.jpg'
      },
      {
        size: 'lg',
        uri: 'https://mui.com/static/images/avatar/1.jpg'
      }
    ]
  }
] as const

export default function AvatarScreen() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        const { title, data } = item

        return (
          <View>
            <Text>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
              {data.map(({ uri, ...attrs }, idx) => {

                return (
                  <Avatar
                    key={idx}
                    variant={'variant' in attrs ? attrs.variant : 'circular'}
                    size={'size' in attrs ? attrs.size : 'md'}
                    source={{ uri }}
                  />
                )
              })}
            </View>
          </View>
        )
      }}
    />
  )
}