import { Avatar, Icon, List, Text } from "rn-ui-kit";

const data = [...Array(10)].map((_, i) => `Item ${i + 1}`)

export default function ListDecoratorScreen() {
  return (
    <List
      data={data}
      renderItem={({ item }) => (
        <List.Item
          left={<Avatar />}
          right={<Icon icon='chevron-right' size='xl' />}
        >
          <Text size='md' color='textHeadline' weight="500">{item}</Text>
          <Text color="textMuted">
            Lorem ipsum dolor sit amet
          </Text>
        </List.Item>
      )}
    />
  )
}
