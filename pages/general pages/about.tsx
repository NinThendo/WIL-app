// src/pages/info/AboutScreen.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { DrawerScreenProps } from "../../type/types";
import { MaterialIcons } from "@expo/vector-icons";

type Props = DrawerScreenProps<"About">;

export function AboutScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.subtitle}>Your Trusted Learning Partner</Text>

        <View style={styles.contentBlock}>
          <Text style={styles.paragraph}>
            We are dedicated to providing high-quality education through our
            carefully crafted 6-week and 6-month courses. Our mission is to make
            learning accessible, engaging, and effective for all our students.
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <MaterialIcons name="school" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Expert Instructors</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="access-time" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Flexible Learning</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="group" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Community Support</Text>
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
  contentBlock: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    marginBottom: 15,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: 20,
  },
  featureItem: {
    alignItems: "center",
    padding: 15,
    width: "33%",
  },
  featureText: {
    marginTop: 8,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
