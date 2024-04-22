import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, StatusBar } from "native-base";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  AboutScreen,
  HomeScreen,
  Semangka,
  Melon,
  Tebu,
  DetailFromDetail,
} from "./screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: "#64BA59",
        tabBarInactiveTintColor: "#C4C4C4",
        tabBarStyle: { height: 65 },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="leaf" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="RootScreen"
            component={BottomNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Semangka"
            component={Semangka}
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerStyle: {
                shadowColor: "transparent",
                backgroundColor: "#f2f2f2",
              },
            }}
          />
          <Stack.Screen
            name="Melon"
            component={Melon}
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerStyle: {
                shadowColor: "transparent",
                backgroundColor: "#f2f2f2",
              },
            }}
          />
          <Stack.Screen
            name="Tebu"
            component={Tebu}
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerStyle: {
                shadowColor: "transparent",
                backgroundColor: "#f2f2f2",
              },
            }}
          />
          <Stack.Screen
            name="DetailFromDetail"
            component={DetailFromDetail}
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerStyle: {
                shadowColor: "transparent",
                backgroundColor: "#f2f2f2",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
