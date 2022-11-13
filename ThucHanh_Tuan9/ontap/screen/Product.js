import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screenBottom/Home";
import Like from "./screenBottom/Like";
import Cart from "./screenBottom/Cart";
import Bell from "./screenBottom/Bell";
import {
  Foundation,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "./screenBottom/color";

const Tab = createBottomTabNavigator();
export default function Product() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => {
            null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Foundation
                name="home"
                size={24}
                color="black"
                style={{
                  color: focused ? colors.lightBrown : "#c3c3c3",
                  paddingTop: 5,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          tabBarLabel: () => {
            null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="md-heart-half"
                size={24}
                color="black"
                style={{
                  color: focused ? colors.lightBrown : "#c3c3c3",
                  paddingTop: 5,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: () => {
            null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="shopping-bag"
                size={24}
                color="black"
                style={{
                  color: focused ? colors.lightBrown : "#c3c3c3",
                  paddingTop: 5,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Bell"
        component={Bell}
        options={{
          tabBarLabel: () => {
            null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="bell"
                size={24}
                color="black"
                style={{
                  color: focused ? colors.lightBrown : "#c3c3c3",
                  paddingTop: 5,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
