import { StyleSheet } from "react-native";

// Color palette
const colors = {
  primary: "#63a375", // Sage green (drawer color)
  secondary: "#4a90e2", // Sky blue
  background: "#f8f9fa", // Light gray
  white: "#ffffff",
  text: {
    primary: "#2d3436", // Dark gray
    secondary: "#666666", // Medium gray
  },
  success: "#27ae60", // Green
  border: "#f0f0f0", // Light border color
  shadow: "#000000", // For shadows
};

export const styles = StyleSheet.create({
  // Container and Header Styles
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  // Hero Section Styles
  heroSection: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 24,
    alignItems: "center",
    elevation: 5,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  // Typography Styles
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text.primary,
    marginTop: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  subheading: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 16,
  },

  // Main Action Button Styles
  mainActionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
    elevation: 5,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  mainActionButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  // Summary Section Styles
  summaryGrid: {
    flexDirection: "column",
    gap: 16,
  },
  summaryContainer: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    elevation: 5,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text.primary,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 16,
    color: colors.text.secondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  summaryDate: {
    fontSize: 12,
    color: colors.text.secondary,
    fontStyle: "italic",
  },

  // Navigation Button Styles
  navigationButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  navigationButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  // Courses Section Styles
  coursesSection: {
    marginVertical: 24,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 16,
    elevation: 5,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  coursesList: {
    marginTop: 16,
  },
  courseCard: {
    width: 280,
    marginRight: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    borderWidth: 1,
    borderColor: colors.border,
  },
  courseThumbnail: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: colors.background,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.text.primary,
  },
  courseDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  courseInfo: {
    fontSize: 14,
    color: colors.text.secondary,
    fontWeight: "500",
  },
  notifyButton: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notifyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
