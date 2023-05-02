import { FlatList, StyleSheet } from "react-native";
import { Avatar, Icon, ListItem, Text } from "rn-ui-kit";

const data = [...Array(10)].map((_, i) => `Item ${i + 1}`)

export default function ListDecorator() {
  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item }) => (
        <ListItem
          left={<Avatar />}
          right={<Icon icon='chevron-right' size='xl' />}
        >
          <Text size='md' color='textHeadline' weight="500">{item}</Text>
          <Text color="textMuted">
            Lorem ipsum dolor sit amet
          </Text>
        </ListItem>
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8
  },
  desc: {
    marginTop: 4
  }
})