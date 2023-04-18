import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mainRoutes } from "./routes";
import type { MainRouteParamList } from "./routes";

const Stack = createNativeStackNavigator<MainRouteParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {mainRoutes.map(route => (
          <Stack.Screen
            key={route.name}
            {...route}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}