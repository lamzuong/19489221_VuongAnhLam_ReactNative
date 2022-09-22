import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./components/MainScreen";
import ChooseColor from "./components/ChooseColor";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ChooseColor" component={ChooseColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
