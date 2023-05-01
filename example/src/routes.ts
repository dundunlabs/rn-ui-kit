import type { RouteConfig, StackNavigationState } from "@react-navigation/native";
import type { NativeStackNavigationEventMap, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Group from "./screens/Group";
import Avatar from "./screens/Avatar";
import Button from "./screens/Button";
import Text from "./screens/Text";
import Icon from "./screens/Icon";
import Badge from "./screens/Badge";

export type MainRouteParamList = {
  Home: undefined
  Group: undefined
  Avatar: undefined
  Button: undefined
  Text: undefined
  Icon: undefined
  Badge: undefined
}

export const mainRoutes: RouteConfig<
  MainRouteParamList,
  keyof MainRouteParamList,
  StackNavigationState<MainRouteParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>[] = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Group',
    component: Group
  },
  {
    name: 'Avatar',
    component: Avatar
  },
  {
    name: 'Button',
    component: Button
  },
  {
    name: 'Text',
    component: Text
  },
  {
    name: 'Icon',
    component: Icon
  },
  {
    name: 'Badge',
    component: Badge
  }
]
