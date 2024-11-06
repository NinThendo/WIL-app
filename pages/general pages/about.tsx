import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
} from "react-native";
import { DrawerScreenProps } from "../../type/types";
import { MaterialIcons } from "@expo/vector-icons";

type Props = DrawerScreenProps<"About">;

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

type Milestone = {
  year: string;
  title: string;
  description: string;
};

export function AboutScreen({ navigation }: Props) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in education technology, Dr. Johnson founded our institution with the vision of making quality education accessible to everyone.",
      imageUrl: "/api/placeholder/200/200",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Curriculum",
      bio: "Former tech lead at major Silicon Valley companies, Michael brings industry expertise to our curriculum development.",
      imageUrl: "/api/placeholder/200/200",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Director of Student Success",
      bio: "Specialized in educational psychology, Emily ensures our learning approaches are optimized for student success.",
      imageUrl: "/api/placeholder/200/200",
    },
  ];

  const milestones: Milestone[] = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "Established with the mission to revolutionize tech education",
    },
    {
      year: "2021",
      title: "First Cohort",
      description:
        "Successfully launched our first batch of courses with 100 students",
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description: "Formed partnerships with leading tech companies",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Extended our reach to international students",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched our state-of-the-art learning facilities",
    },
  ];

  const features = [
    {
      icon: "school",
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with real-world experience",
    },
    {
      icon: "access-time",
      title: "Flexible Learning",
      description: "Study at your own pace with our hybrid learning model",
    },
    {
      icon: "group",
      title: "Community Support",
      description: "Join a vibrant community of learners and mentors",
    },
    {
      icon: "laptop",
      title: "Modern Curriculum",
      description:
        "Stay updated with the latest industry trends and technologies",
    },
    {
      icon: "workspace-premium",
      title: "Career Support",
      description: "Get guidance for job placement and career advancement",
    },
    {
      icon: "handshake",
      title: "Industry Network",
      description: "Connect with our network of industry partners",
    },
  ];
  // This toggle pattern is based on approaches discussed in resources for managing expanded sections in React Native.
  // Sources:
  // - https://blog.logrocket.com/react-native-sectionlist-tutorial-examples/
  // - https://30dayscoding.com/blog/building-react-native-apps-with-react-native-sectionlist

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        // Code based on the React Native Image documentation //
        Source:https://reactnative.dev/docs/image
        <Image
          source={{ uri: "/api/placeholder/800/400" }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.subtitle}>Your Trusted Learning Partner</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.paragraph}>
          We are dedicated to transforming lives through education by providing
          high-quality, industry-relevant training in technology and digital
          skills. Our carefully crafted 6-week and 6-month courses combine
          theoretical knowledge with practical experience, preparing students
          for successful careers in the tech industry.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Sets Us Apart</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <MaterialIcons
                name={feature.icon as any}
                size={32}
                color="#007AFF"
              />
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>
                {feature.description}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Journey</Text>
        <View style={styles.timeline}>
          {milestones.map((milestone, index) => (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelinePoint} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>{milestone.year}</Text>
                <Text style={styles.timelineTitle}>{milestone.title}</Text>
                <Text style={styles.timelineDescription}>
                  {milestone.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Leadership Team</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.teamContainer}
        >
          {teamMembers.map((member) => (
            <View key={member.id} style={styles.teamMember}>
              <Image
                source={{ uri: member.imageUrl }}
                style={styles.teamMemberImage}
              />
              <Text style={styles.teamMemberName}>{member.name}</Text>
              <Text style={styles.teamMemberRole}>{member.role}</Text>
              <Text style={styles.teamMemberBio}>{member.bio}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <View style={styles.contactContainer}>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => Linking.openURL("mailto:contact@example.com")}
          >
            <MaterialIcons name="email" size={24} color="#fff" />
            <Text style={styles.contactButtonText}>Email Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => navigation.navigate("Contact")}
          >
            <MaterialIcons name="chat" size={24} color="#fff" />
            <Text style={styles.contactButtonText}>Contact Form</Text>
          </TouchableOpacity>
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
  heroSection: {
    height: 300,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    marginBottom: 15,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureItem: {
    width: "48%",
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  timeline: {
    padding: 20,
  },
  timelineItem: {
    flexDirection: "row",
    marginBottom: 30,
  },
  timelinePoint: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#007AFF",
    marginRight: 15,
    marginTop: 5,
  },
  timelineContent: {
    flex: 1,
  },
  timelineYear: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 5,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  timelineDescription: {
    fontSize: 14,
    color: "#666",
  },
  teamContainer: {
    marginHorizontal: -20,
  },
  teamMember: {
    width: 280,
    marginHorizontal: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    padding: 15,
  },
  teamMemberImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 15,
  },
  teamMemberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  teamMemberRole: {
    fontSize: 14,
    color: "#007AFF",
    textAlign: "center",
    marginBottom: 10,
  },
  teamMemberBio: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  contactButton: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    width: "45%",
    justifyContent: "center",
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
