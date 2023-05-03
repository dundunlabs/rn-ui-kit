import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Divider, Group, List, Text } from "rn-ui-kit";

const data = [...Array(100)].map((_, i) => `Item ${i + 1}`)

const sizes = ['sm', 'md', 'lg'] as const

export default function BasicListScreen() {
  const [size, setSize] = useState<typeof sizes[number]>('lg')

  return (
    <Group flex={1}>
      <Group row spacing={2} style={styles.sizes}>
        {sizes.map(s => (
          <Button
            key={s}
            variant={size === s ? 'solid' : 'outlined'}
            onPress={() => setSize(s)}
          >
            {s}
          </Button>
        ))}
      </Group>
      <Divider />
      <List
        size={size}
        data={data}
        renderItem={({ item }) => (
          <List.Item>
            <Text size='md' weight="500" color='textHeadline'>{item}</Text>
            <Text color="textMuted" style={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </List.Item>
        )}
      />
    </Group>
  )
}

const styles = StyleSheet.create({
  sizes: {
    padding: 16
  },
  desc: {
    marginTop: 4
  }
})