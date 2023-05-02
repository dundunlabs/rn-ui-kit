import { ScrollView, View } from "react-native";
import { Group, Text, Icon, Badge } from 'rn-ui-kit'
import Rectangle from "../components/Rectangle";
import Circle from "../components/Circle";

export default function BadgeScreen() {
  return (
    <ScrollView>
      <View>
        <Text size='lg' color='textHeadline'>
          Positions
        </Text>
        <Group row spacing={4}>
          <View>
            <Badge>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge position='bottom-right'>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge position='bottom-left'>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge position='top-left'>
              <Rectangle />
            </Badge>
          </View>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Sizes
        </Text>
        <Group row spacing={4}>
          <View>
            <Badge size='sm'>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge size='lg'>
              <Rectangle />
            </Badge>
          </View>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Colors
        </Text>
        <Group row spacing={4}>
          <View>
            <Badge>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge color='secondary'>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge color='black'>
              <Rectangle />
            </Badge>
          </View>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Content
        </Text>
        <Group row spacing={4}>
          <View>
            <Badge size='sm' content={<Text>1</Text>}>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge content={<Icon icon='arrow-right' />}>
              <Rectangle />
            </Badge>
          </View>
          <View>
            <Badge size='lg' content={<Icon icon='x-mark' />} >
              <Rectangle />
            </Badge>
          </View>
        </Group>
      </View>

      <View>
        <Text size='lg' color='textHeadline'>
          Inset
        </Text>
        <Group row spacing={4}>
          <View>
            <Badge inset='14%'>
              <Circle />
            </Badge>
          </View>
          <View>
            <Badge inset='14%' position='bottom-right'>
              <Circle />
            </Badge>
          </View>
          <View>
            <Badge inset='14%' position='bottom-left'>
              <Circle />
            </Badge>
          </View>
          <View>
            <Badge inset='14%' position='top-left'>
              <Circle />
            </Badge>
          </View>
        </Group>
      </View>
    </ScrollView>
  )
}