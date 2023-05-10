import * as React from "react";
import { Text, View } from "react-native";
import StatsScreen from "./components/StatsScreen";
import BandsScreen from "./components/BandsScreen";
import StylesScreen from "./components/StylesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import { StatusBar } from "react-native";
import { useLayoutEffect } from "react";

const Tab = createBottomTabNavigator();

// cannot manage to fix white top bar :/
export default function App() {
  useLayoutEffect(() => {
    StatusBar.setBackgroundColor("black");
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Stats") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            } else if (route.name === "Bands") {
              iconName = focused ? "musical-notes" : "musical-notes-outline";
            } else if (route.name === "Styles") {
              iconName = focused ? "flame" : "flame-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null,

          tabBarActiveTintColor: "#f00",
          tabBarInactiveTintColor: "#600",
          tabBarInactiveBackgroundColor: "#000",
          tabBarActiveBackgroundColor: "#111",
        })}
      >
        <Tab.Screen name="Styles" component={StylesScreen} />
        <Tab.Screen name="Bands" component={BandsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
