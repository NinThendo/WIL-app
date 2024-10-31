// src/pages/info/ContactScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { DrawerScreenProps } from "../../type/types";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

type Props = DrawerScreenProps<"Contact">;

export function ContactScreen({ navigation }: Props) {
  const handleContact = (method: string) => {
    switch (method) {
      case "phone":
        Linking.openURL("tel:+1234567890");
        break;
      case "email":
        Linking.openURL("mailto:contact@example.com");
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>We're here to help!</Text>

        <View style={styles.contactOptions}>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => handleContact("phone")}
          >
            <FontAwesome name="phone" size={24} color="#007AFF" />
            <Text style={styles.contactButtonText}>Call Us</Text>
            <Text style={styles.contactDetail}>+1 (234) 567-890</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => handleContact("email")}
          >
            <MaterialIcons name="email" size={24} color="#007AFF" />
            <Text style={styles.contactButtonText}>Email Us</Text>
            <Text style={styles.contactDetail}>contact@example.com</Text>
          </TouchableOpacity>

          <View style={styles.contactButton}>
            <MaterialIcons name="location-on" size={24} color="#007AFF" />
            <Text style={styles.contactButtonText}>Visit Us</Text>
            <Text style={styles.contactDetail}>123 Education St.</Text>
            <Text style={styles.contactDetail}>New York, NY 10001</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  contactOptions: {
    marginTop: 20,
  },
  contactButton: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  contactButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    marginTop: 10,
    marginBottom: 5,
  },
  contactDetail: {
    fontSize: 16,
    color: "#666",
    marginTop: 2,
  },
});
