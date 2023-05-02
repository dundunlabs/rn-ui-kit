import { FlatList, StyleSheet } from "react-native";
import { ListItem, Text } from "rn-ui-kit";

const data = [...Array(100)].map((_, i) => `Item ${i + 1}`)

export default function BasicList() {
  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item }) => (
        <ListItem>
          <Text size='md' weight="500" color='textHeadline'>{item}</Text>
          <Text color="textMuted" style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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