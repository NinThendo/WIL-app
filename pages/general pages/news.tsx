import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Dimensions,
} from "react-native";
import { DrawerScreenProps } from "../../type/types";
import { styles } from "../../styles/newsStyle";

type Props = DrawerScreenProps<"News">;

type NewsItem = {
  id: number;
  title: string;
  date: string;
  preview: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
};

export function NewsScreen({ navigation }: Props) {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const news: NewsItem[] = [
    {
      id: 1,
      title: "New Course Announcement: AI and Machine Learning Specialization",
      date: "October 25, 2024",
      preview:
        "Exciting new courses coming this winter season with focus on AI and Machine Learning, featuring hands-on projects with industry-standard tools",
      content:
        "We are thrilled to announce our new lineup of courses focused on cutting-edge technologies. The program includes deep learning, natural language processing, and computer vision modules. Students will work with TensorFlow, PyTorch, and real-world datasets while being mentored by industry experts from leading tech companies.",
      category: "courses",
      author: "Dr. Emily Chen",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Student Success Story: From Bootcamp to Google Engineer",
      date: "October 22, 2024",
      preview:
        "Meet Sarah Zhang, who landed her dream job at Google after completing our advanced programming course. Learn about her journey and tips for success.",
      content:
        "Our recent graduate Sarah Zhang has an inspiring story to share. After transitioning from a marketing background, she completed our 6-month intensive programming bootcamp, built an impressive portfolio of full-stack applications, and successfully landed a role as a Software Engineer at Google. Her dedication to learning and practical project work made her stand out among candidates.",
      category: "success",
      author: "James Wilson",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Campus Expansion Project: Tech Innovation Hub",
      date: "October 20, 2024",
      preview:
        "Breaking ground on our new tech innovation center opening Spring 2025, featuring state-of-the-art labs and collaboration spaces",
      content:
        "We're excited to announce the expansion of our campus facilities with a new 50,000 square foot Tech Innovation Hub. The facility will feature AR/VR labs, AI research centers, startup incubation spaces, and modern classrooms equipped with the latest technology. The $30M investment demonstrates our commitment to providing students with cutting-edge learning environments.",
      category: "campus",
      author: "Michael Roberts",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Industry Partnership Program Expands with Major Tech Companies",
      date: "October 18, 2024",
      preview:
        "New collaboration with leading tech companies offers expanded internship opportunities and mentorship programs for students",
      content:
        "We've established new partnerships with industry leaders including Microsoft, Amazon, and Meta. These partnerships will provide our students with exclusive internship opportunities, mentorship programs, and early access to new technologies. The program also includes regular tech talks from industry experts and hands-on workshops using enterprise-grade development tools.",
      category: "partnerships",
      author: "Lisa Thompson",
      readTime: "7 min",
    },
  ];

  const categories = [
    { id: "all", label: "All News" },
    { id: "courses", label: "Courses" },
    { id: "success", label: "Success Stories" },
    { id: "campus", label: "Campus" },
    { id: "partnerships", label: "Partnerships" },
  ];

  const filteredNews =
    selectedCategory === "all"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  const navigateToDetail = (item: NewsItem) => {
    navigation.navigate("NewsDetail", { newsItem: item });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Latest News</Text>
        <Text style={styles.subtitle}>
          Stay updated with the latest announcements
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.categoryTextActive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.section}>
        {filteredNews.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.newsItem}
            onPress={() => navigateToDetail(item)}
          >
            <View style={styles.newsContent}>
              <View style={styles.categoryTag}>
                <Text style={styles.categoryTagText}>
                  {categories.find((cat) => cat.id === item.category)?.label ||
                    item.category}
                </Text>
              </View>
              <View style={styles.newsHeader}>
                <Text style={styles.newsDate}>{item.date}</Text>
                <Text style={styles.newsMetadata}>
                  {item.author} • {item.readTime} read
                </Text>
              </View>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsPreview}>{item.preview}</Text>
              <Text style={styles.newsContent}>{item.content}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
