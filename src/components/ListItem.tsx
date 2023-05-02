import React from "react";
import withDefaultProps from "../hocs/withDefaultProps";
import Group from "./Group";
import type { ListItemProps } from "../theme/components/listItem";
import withStyle from "../hocs/withStyle";
import { Pressable, View } from "react-native";

const ListItemContent = withStyle(View)({
  flex: 1
})

const StyledGroup = withStyle(Group)(({ space }) => {
  return {
    paddingVertical: space(2),
    paddingHorizontal: space(4)
  }
})

function ListItem({ children, left, right, ...props }: ListItemProps) {
  return (
    <Pressable {...props}>
      <StyledGroup row spacing={4} align="center">
        {left}
        <ListItemContent>
          {children}
        </ListItemContent>
        {right}
      </StyledGroup>
    </Pressable>
  )
}

export default withDefaultProps(ListItem, 'ListItem')