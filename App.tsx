// Import required dependencies
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerParamList, RootStackParamList } from "./type/types";
import { HomePage } from "./pages/general pages/welc";
import { ItemSelectionScreen } from "./pages/checkout/pay";
import { PaymentDetailsScreen } from "./pages/checkout/checkout";
import { PaymentSuccessScreen } from "./pages/checkout/success";
import { Courses1Screen } from "./pages/courses/6WeekCourses";
import { Courses2Screen } from "./pages/courses/6MonthCourses";
import { NewsScreen } from "./pages/general pages/news";
import { ContactScreen } from "./pages/general pages/contact";
import { AboutScreen } from "./pages/general pages/about";

// Color palette definition
const colors = {
  primary: "#63a375", // Sage green for drawer
  secondary: "#4a90e2", // Sky blue for accents and CTAs
  background: "#f8f9fa", // Light gray background
  text: "#2d3436", // Dark gray text
  success: "#27ae60", // Green for success states
  warning: "#f39c12", // Orange for warnings
  error: "#e74c3c", // Red for errors
  white: "#ffffff", // Pure white
};

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// This code is based on the Drawer-based Navigation example from React Navigation documentation
// Source: https://reactnavigation.org/docs/drawer-based-navigation/

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerStyle: {
          backgroundColor: colors.primary,
        },
        drawerLabelStyle: {
          color: colors.white,
        },
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Six week courses" component={Courses1Screen} />
      <Drawer.Screen name="Six month courses" component={Courses2Screen} />
      <Drawer.Screen name="News" component={NewsScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemSelection"
          component={ItemSelectionScreen}
          options={{
            title: "Select Items",
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="PaymentDetails"
          component={PaymentDetailsScreen}
          options={{
            title: "Payment Details",
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccessScreen}
          options={{
            title: "Payment Successful",
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.success,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
