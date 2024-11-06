import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type/types";
import { styles } from "../../styles/homeStyle";

type HomePageProps = NativeStackScreenProps<RootStackParamList, "HomePage">;

type PageSummary = {
  title: string;
  summary: string;
  hasButton?: boolean;
  buttonText?: string;
  navigateTo?: keyof RootStackParamList;
  date?: string;
};

type Course = {
  id: string;
  title: string;
  duration: string;
  level: string;
  thumbnail: any;
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const handleNotifyMe = () => {
    Alert.alert(
      "Notification Set!",
      `We'll notify you when "${course.title}" becomes available.`,
      [
        {
          text: "OK",
          style: "default",
        },
      ]
    );
  };

  return (
    <View style={styles.courseCard}>
      <Image source={course.thumbnail} style={styles.courseThumbnail} />
      <Text style={styles.courseTitle}>{course.title}</Text>
      <View style={styles.courseDetails}>
        <Text style={styles.courseInfo}>{course.duration}</Text>
        <Text style={styles.courseInfo}>{course.level}</Text>
      </View>
      <TouchableOpacity style={styles.notifyButton} onPress={handleNotifyMe}>
        <Text style={styles.notifyButtonText}>Notify Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const upcomingCourses: Course[] = [
  {
    id: "1",
    title: "Basic Car Maintenance",
    duration: "4 weeks",
    level: "Beginner",
    thumbnail: require("../../images/maint.jpg"),
  },
  {
    id: "2",
    title: "Personal Finance 101",
    duration: "6 weeks",
    level: "Beginner",
    thumbnail: require("../../images/calc.jpg"),
  },
  {
    id: "3",
    title: "Home DIY Basics",
    duration: "8 weeks",
    level: "Intermediate",
    thumbnail: require("../../images/DIY.jpg"),
  },
  {
    id: "4",
    title: "Time Management",
    duration: "3 weeks",
    level: "All Levels",
    thumbnail: require("../../images/clock.jpg"),
  },
];

const pageSummaries: PageSummary[] = [
  {
    title: "Latest Updates",
    summary:
      "New course on Basic Programming launching next month! Join the waitlist to secure your spot.",
    date: "April 1, 2024",
  },
  {
    title: "Meet Our Team",
    summary:
      "Our instructors bring decades of real-world experience to help you master practical skills.",
    date: "Featured Team",
  },
  {
    title: "Community Spotlight",
    summary:
      "Congratulations to Sarah who used her new DIY skills to renovate her entire apartment!",
    date: "Community Story",
  },
  {
    title: "Upcoming Events",
    summary:
      "Join our weekend workshop on sustainable living practices - Free for all members!",
    date: "This Weekend",
  },
  {
    title: "Learning Tips",
    summary:
      "Check out our blog for the best ways to maintain consistent learning habits.",
    date: "Weekly Tips",
  },
  {
    title: "Shop Resources",
    summary: "Get equipped with the tools you need for success.",
    hasButton: true,
    buttonText: "Shop Now",
    navigateTo: "ItemSelection",
  },
];

export const HomePage = ({ navigation }: HomePageProps) => {
  const handleNavigation = (navigateTo: keyof RootStackParamList) => {
    Alert.alert(
      "Heading to Shop",
      "You'll be redirected to our shop page. Continue?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: () => {
            navigation.navigate("ItemSelection");
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heading}>Welcome to Empowering the Nation</Text>
      </View>

      <View style={styles.coursesSection}>
        <Text style={styles.subheading}>Courses Coming Soon</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={upcomingCourses}
          renderItem={({ item }) => <CourseCard course={item} />}
          keyExtractor={(item) => item.id}
          style={styles.coursesList}
        />
      </View>

      <Text style={styles.subheading}>Community & Updates</Text>
      <View style={styles.summaryGrid}>
        {pageSummaries.map((page, index) => (
          <View key={index} style={styles.summaryContainer}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryTitle}>{page.title}</Text>
              {page.date && <Text style={styles.summaryDate}>{page.date}</Text>}
            </View>
            <Text style={styles.summaryText}>{page.summary}</Text>
            {page.hasButton && page.navigateTo && (
              <TouchableOpacity
                style={styles.navigationButton}
                onPress={() => handleNavigation(page.navigateTo!)}
              >
                <Text style={styles.navigationButtonText}>
                  {page.buttonText}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomePage;
