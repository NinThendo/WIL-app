import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import { DrawerScreenProps } from "../../type/types";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { styles } from "../../styles/conStyle";

type Props = DrawerScreenProps<"Contact">;

export function ContactScreen({ navigation }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleContact = (method: string) => {
    switch (method) {
      case "phone":
        Linking.openURL("tel:+27011234567");
        break;
      case "email":
        Linking.openURL("mailto:contact@johannesburg-example.co.za");
        break;
    }
  };

  const handleSubmit = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    // Here you would typically send the data to your backend
    Alert.alert(
      "Success",
      `Thank you for your submission!\n${
        newsletter
          ? "You will receive our newsletter"
          : "You can update your newsletter preferences anytime"
      }`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>We're here to help!</Text>

        {/* User Information Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Your Information</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Enter your first name"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Enter your last name"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Receive newsletters</Text>
            <Switch
              value={newsletter}
              onValueChange={setNewsletter}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={newsletter ? "#007AFF" : "#f4f3f4"}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactOptions}>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => handleContact("phone")}
          >
            <FontAwesome name="phone" size={24} color="#007AFF" />
            <Text style={styles.contactButtonText}>Call Us</Text>
            <Text style={styles.contactDetail}>+27 (011) 123-4567</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => handleContact("email")}
          >
            <MaterialIcons name="email" size={24} color="#007AFF" />
            <Text style={styles.contactButtonText}>Email Us</Text>
            <Text style={styles.contactDetail}>
              contact@johannesburg-example.co.za
            </Text>
          </TouchableOpacity>

          <View style={styles.contactButton}>
            <MaterialIcons name="location-on" size={24} color="#007AFF" />
            <Text style={styles.contactButtonText}>Visit Us</Text>
            <Text style={styles.contactDetail}>123 Jan Smuts Avenue</Text>
            <Text style={styles.contactDetail}>
              Rosebank, Johannesburg 2196
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
