import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mainRoutes } from "./routes";
import theme from "./theme";
import type { MainRouteParamList } from "./routes";

const Stack = createNativeStackNavigator<MainRouteParamList>()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}