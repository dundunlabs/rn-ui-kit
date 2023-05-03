import { useState } from "react";
import { Modal, Button, Container, Text, Group } from "rn-ui-kit";

export default function ModalScreen() {
  const [visible, setVisible] = useState(false)

  return (
    <Container row my={4}>
      <Button onPress={() => setVisible(true)}>
        Open modal
      </Button>
      <Modal
        visible={visible}
        transparent
        animationType='fade'
        onRequestClose={() => setVisible(false)}
      >
        <Container py={4} spacing={4}>
          <Group spacing={2}>
            <Text size='lg' color='textHeadline' weight="500">Modal</Text>
            <Text color='textMuted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
          </Group>
          <Button onPress={() => setVisible(false)}>Close</Button>
        </Container>
      </Modal>
    </Container>
  )
}
