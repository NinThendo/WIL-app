import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
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

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// SplashScreen Component
function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Drawer"); // Navigate to the main Drawer after splash
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Image
        source={require("./images/logo.jpeg")}
        style={styles.splashImage}
      />
    </View>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a7c82" },
        headerTintColor: "#333",
        headerTitleStyle: { fontWeight: "bold" },
        drawerStyle: { backgroundColor: "#63a375" },
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
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
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
            headerStyle: { backgroundColor: "#f9f9f9" },
            headerTintColor: "#333",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="PaymentDetails"
          component={PaymentDetailsScreen}
          options={{ title: "Payment Details" }}
        />
        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccessScreen}
          options={{ title: "Payment Successful" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f2e8",
  },
  splashImage: {
    width: 500,
    height: 500,
    resizeMode: "contain",
  },
});
