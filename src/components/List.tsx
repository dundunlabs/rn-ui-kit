import React, { useContext } from "react";
import { FlatList, SectionList, Pressable, View } from "react-native";
import type { FlatListProps, SectionListProps } from "react-native";
import useTheme from "../hooks/useTheme";
import { resolveComponentStyles } from "../utils";
import type { CommonListProps, ListItemProps } from "../theme/components/list";
import withDefaultProps from "../hocs/withDefaultProps";
import Group from "./Group";
import withStyle from "../hocs/withStyle";
import withResolvedStyle from "../hocs/withResolvedStyle";
import ListContext from "../contexts/list";

function List<ItemT>(props: CommonListProps & FlatListProps<ItemT>): JSX.Element
function List<ItemT, SectionT>(props: CommonListProps & SectionListProps<ItemT, SectionT>): JSX.Element
function List<ItemT, SectionT>(props: CommonListProps & (FlatListProps<ItemT> | SectionListProps<ItemT, SectionT>)) {
  const theme = useTheme()
  const { size = 'lg', ...rest } = props
  const styles = resolveComponentStyles(theme.components.List.styles, theme, props)
  const commonProps = {
    contentContainerStyle: [styles.sizes[size], rest.style]
  }

  return (
    <ListContext.Provider value={{ size }}>
      {'sections' in rest
        ? <SectionList {...rest} {...commonProps} />
        : <FlatList {...rest} {...commonProps} />
      }
    </ListContext.Provider>
  )
}

const ListItemWrapper = withResolvedStyle(Group, 'ListItem')<CommonListProps>(({ sizes }, _, { size = 'lg' }) => ({
  ...(sizes[size])
}))

const ListItemContent = withStyle(View)({
  flex: 1
})

function ListItem({ children, left, right, style, size: listSize, ...props }: ListItemProps) {
  const { size = listSize } = useContext(ListContext)

  return (
    <Pressable {...props}>
      <ListItemWrapper
        row
        spacing={4}
        align="center"
        style={style}
        size={size}
      >
        {left}
        <ListItemContent>
          {children}
        </ListItemContent>
        {right}
      </ListItemWrapper>
    </Pressable>
  )
}

List.Item = withDefaultProps(ListItem, 'ListItem')

export default List