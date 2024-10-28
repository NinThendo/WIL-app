import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParamList, DrawerParamList } from "../../type/types";

// Course data structure
interface Course {
  id: string;
  title: string;
  image: any;
  description: string;
  duration: string;
  fee: string;
  mode: string;
  content: string[];
}

const courses: Course[] = [
  {
    id: "1",
    title: "First Aid",
    image: require("../../images/first.jpg"),
    description:
      "Comprehensive first aid and basic life support training program",
    duration: "6 months",
    fee: "R1500",
    mode: "In-person",
    content: [
      "Wounds and Bleeding: Techniques to treat wounds and control bleeding",
      "Burns and Fractures: Assessment and care for burns and fractures",
      "Emergency Scene Management: Steps to manage emergency scenes safely",
      "Cardio-Pulmonary Resuscitation (CPR): Skills to perform CPR",
      "Respiratory Distress: Response techniques for choking and other issues",
    ],
  },
  {
    id: "2",
    title: "Sewing",
    image: require("../../images/sewing.jpg"),
    description: "Master the art of sewing and garment creation",
    duration: "6 months",
    fee: "R1500",
    mode: "Hybrid",
    content: [
      "Basic Stitching Techniques",
      "Pattern Making and Design",
      "Garment Construction",
      "Machine Operation and Maintenance",
    ],
  },
  {
    id: "3",
    title: "Landscaping",
    image: require("../../images/land.jpg"),
    description: "Learn professional landscaping and garden design",
    duration: "6 months",
    fee: "R1500",
    mode: "In-person",
    content: [
      "Garden Design Principles & Layout",
      "Plant Selection & Maintenance",
      "Irrigation & Technical Systems",
      "Fixed Structures & Garden Features",
      "Plant Aesthetics & Color Theory",
      "Indigenous & Exotic Plant Care",
    ],
  },
  {
    id: "4",
    title: "Life Skills",
    image: require("../../images/sewing.jpg"),
    description:
      "Develop essential life skills for personal and professional development",
    duration: "6 months",
    fee: "R1500",
    mode: "In-person",
    content: [
      "Personal Banking & Account Management",
      "Basic Labour Law & Workers' Rights",
      "Reading & Writing Literacy",
      "Numeric Literacy & Budgeting",
      "Financial Decision Making",
      "Basic Life Management Skills",
    ],
  },
];

type Courses2ScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList, "Courses2">,
  NativeStackNavigationProp<RootStackParamList>
>;

type CoursePreviewProps = {
  navigation: Courses2ScreenNavigationProp;
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <View style={styles.courseContainer}>
    <Image source={course.image} style={styles.image} resizeMode="cover" />
    <View style={styles.textContent}>
      <Text style={styles.title}>{course.title}</Text>
      <View style={styles.courseInfo}>
        <Text style={styles.infoItem}>⏱ Duration: {course.duration}</Text>
        <Text style={styles.infoItem}>💰 Fee: {course.fee}</Text>
        <Text style={styles.infoItem}>🎓 Mode: {course.mode}</Text>
      </View>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.contentHeader}>Course Content:</Text>
      {course.content.map((item, index) => (
        <Text key={index} style={styles.contentItem}>
          • {item}
        </Text>
      ))}
    </View>
  </View>
);

export const Courses2Screen: React.FC<CoursePreviewProps> = ({
  navigation,
}) => {
  const handleNavigate = (): void => {
    navigation.navigate("ItemSelection");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Our Courses</Text>
        <View style={styles.grid}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>Proceed to Course Selection</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
    width: "100%",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 24,
    color: "#1a365d",
    letterSpacing: 0.5,
  },
  grid: {
    flexDirection: "column",
    width: "100%",
    gap: 24,
  },
  courseContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 220,
  },
  textContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#2c5282",
  },
  courseInfo: {
    backgroundColor: "#f7fafc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoItem: {
    fontSize: 15,
    color: "#4a5568",
    marginBottom: 4,
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
    color: "#4a5568",
    lineHeight: 24,
    marginBottom: 16,
  },
  contentHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: 8,
  },
  contentItem: {
    fontSize: 15,
    color: "#4a5568",
    lineHeight: 22,
    marginBottom: 6,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: "#6b2738",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 32,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
