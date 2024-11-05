import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#2d3436",
    marginBottom: 10,
  },
  categoryContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e9ecef",
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: "#4a90e2",
  },
  categoryText: {
    fontSize: 14,
    color: "#2d3436",
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#fff",
  },
  section: {
    padding: 20,
  },
  newsItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  newsImage: {
    width: "100%",
    height: 200,
  },
  newsContent: {
    padding: 15,
  },
  categoryTag: {
    backgroundColor: "#e9ecef",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  categoryTagText: {
    fontSize: 12,
    color: "#2d3436",
    fontWeight: "500",
  },
  newsDate: {
    fontSize: 14,
    color: "#2d3436",
    marginBottom: 5,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 8,
  },
  newsPreview: {
    fontSize: 16,
    color: "#2d3436",
    marginBottom: 12,
    lineHeight: 22,
  },
  readMore: {
    color: "#4a90e2",
    fontSize: 14,
    fontWeight: "600",
  },
});
