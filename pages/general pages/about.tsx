import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { styles } from "../../styles/aboutStyle";

type RootStackParamList = {
  About: undefined;
  Contact: undefined;
};

type Props = DrawerScreenProps<RootStackParamList, "About">;

interface Feature {
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const AboutScreen: React.FC<Props> = ({ navigation }) => {
  const features: Feature[] = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with real-world experience",
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with our hybrid learning model",
    },
    {
      title: "Career Support",
      description: "Get guidance for job placement and career advancement",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in education technology, Dr. Johnson founded our institution with the vision of making quality education accessible to everyone.",
    },
    {
      name: "Michael Chen",
      role: "Head of Curriculum",
      bio: "Former tech lead at major Silicon Valley companies, Michael brings industry expertise to our curriculum development.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.subtitle}>Your Trusted Learning Partner</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Mission</Text>
        <Text style={styles.cardText}>
          We are dedicated to transforming lives through education by providing
          high-quality, industry-relevant training in technology and digital
          skills. Our courses combine theoretical knowledge with practical
          experience, preparing students for successful careers in tech.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>What Sets Us Apart</Text>
        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>
                {feature.description}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Leadership Team</Text>
        {team.map((member, index) => (
          <View key={index} style={styles.teamMember}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberRole}>{member.role}</Text>
            <Text style={styles.memberBio}>{member.bio}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Get in Touch</Text>
        <View style={styles.contactButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("mailto:contact@example.com")}
          >
            <Text style={styles.buttonText}>Email Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Contact")}
          >
            <Text style={styles.buttonText}>Contact Form</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
