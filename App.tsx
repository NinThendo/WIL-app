import "react-native-gesture-handler";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerParamList,
  RootStackParamList,
  DrawerScreenProps,
  StackScreenProps,
} from "./type/types";
import { HomePage } from "./pages/general pages/welc";
import { ItemSelectionScreen } from "./pages/checkout/pay";
import { PaymentDetailsScreen } from "./pages/checkout/checkout";
import { PaymentSuccessScreen } from "./pages/checkout/success";
import { Courses1Screen } from "./pages/courses/6WeekCourses";
import { Courses2Screen } from "./pages/courses/6MonthCourses";

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function NewsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>News Screen</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Screen</Text>
    </View>
  );
}

// Stack Screens
function WelcomePage({ navigation }: StackScreenProps<"HomePage">) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <Text>Go to Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignUpScreen({ navigation }: StackScreenProps<"SignUpScreen">) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function OtherPage1() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Other Page 1</Text>
    </View>
  );
}

function OtherPage2() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Other Page 2</Text>
    </View>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="News" component={NewsScreen} />
      <Drawer.Screen name="Six week courses" component={Courses1Screen} />
      <Drawer.Screen name="Six month courses" component={Courses2Screen} />

      <Drawer.Screen name="Contact" component={ContactScreen} />
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
        <Stack.Screen name="HomePage" component={WelcomePage} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />

        <Stack.Screen
          name="ItemSelection"
          component={ItemSelectionScreen}
          options={{
            title: "Select Items",
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
            headerTintColor: "#333",
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
          }}
        />
        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccessScreen}
          options={{
            title: "Payment Successful",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
