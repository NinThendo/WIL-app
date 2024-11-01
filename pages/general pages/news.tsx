import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Image,
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
  imageUrl?: string;
};

export function NewsScreen({ navigation }: Props) {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const news: NewsItem[] = [
    {
      id: 1,
      title: "New Course Announcement",
      date: "October 25, 2024",
      preview:
        "Exciting new courses coming this winter season with focus on AI and Machine Learning",
      content:
        "We are thrilled to announce our new lineup of courses focused on cutting-edge technologies...",
      category: "courses",
      imageUrl: "/api/placeholder/800/400",
    },
    {
      id: 2,
      title: "Student Success Story",
      date: "October 22, 2024",
      preview:
        "Meet Sarah, who landed her dream job at Google after completing our advanced programming course",
      content: "Our recent graduate Sarah has an inspiring story to share...",
      category: "success",
      imageUrl: "/api/placeholder/800/400",
    },
    {
      id: 3,
      title: "Campus Expansion Project",
      date: "October 20, 2024",
      preview:
        "Breaking ground on our new tech innovation center opening Spring 2025",
      content:
        "We're excited to announce the expansion of our campus facilities...",
      category: "campus",
      imageUrl: "/api/placeholder/800/400",
    },
    {
      id: 4,
      title: "Industry Partnership Announcement",
      date: "October 18, 2024",
      preview:
        "New collaboration with leading tech companies to provide internship opportunities",
      content: "We've established new partnerships with industry leaders...",
      category: "partnerships",
      imageUrl: "/api/placeholder/800/400",
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
    // Navigate to detail screen with news item data
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
            {item.imageUrl && (
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.newsImage}
                resizeMode="cover"
              />
            )}
            <View style={styles.newsContent}>
              <View style={styles.categoryTag}>
                <Text style={styles.categoryTagText}>
                  {categories.find((cat) => cat.id === item.category)?.label ||
                    item.category}
                </Text>
              </View>
              <Text style={styles.newsDate}>{item.date}</Text>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsPreview}>{item.preview}</Text>
              <Text style={styles.readMore}>Read more →</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
