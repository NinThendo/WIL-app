// src/pages/info/NewsScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DrawerScreenProps } from "../../type/types";

type Props = DrawerScreenProps<"News">;

export function NewsScreen({ navigation }: Props) {
  const news = [
    {
      id: 1,
      title: "New Course Announcement",
      date: "October 25, 2024",
      preview: "Exciting new courses coming this winter season...",
      content: "We are thrilled to announce our new lineup of courses...",
    },
    {
      id: 2,
      title: "Student Success Story",
      date: "October 22, 2024",
      preview: "Meet Sarah, who landed her dream job after completing...",
      content: "Our recent graduate Sarah has an inspiring story to share...",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Latest News</Text>

        {news.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.newsItem}
            onPress={() => {
              // Handle news item click
              // You could navigate to a detail screen here
            }}
          >
            <Text style={styles.newsDate}>{item.date}</Text>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsPreview}>{item.preview}</Text>
            <Text style={styles.readMore}>Read more →</Text>
          </TouchableOpacity>
        ))}
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
    marginBottom: 20,
    color: "#333",
  },
  newsItem: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  newsDate: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  newsPreview: {
    fontSize: 16,
    color: "#444",
    marginBottom: 8,
  },
  readMore: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "500",
  },
});
