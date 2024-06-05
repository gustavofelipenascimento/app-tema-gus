import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import {
  ThemeDark,
  ThemeLight,
  ThemeDarkNavigation,
  ThemeLightNavigation,
} from "../config/theme";
import HomeScreen from "../screens/HomeScreen";
import { useTheme } from "../contexts/ThemeContexts";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isDarkTheme } = useTheme();

  const theme = isDarkTheme ? ThemeDark : ThemeLight;
  const themeNavigation = isDarkTheme
    ? ThemeDarkNavigation
    : ThemeLightNavigation;

  return (
    <Provider theme={theme}>
      <NavigationContainer theme={themeNavigation}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
