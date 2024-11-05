import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  heroSection: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 24,
  },
  featuresContainer: {
    gap: 16,
  },
  featureItem: {
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    color: "#666666",
  },
  teamMember: {
    marginBottom: 16,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  memberRole: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 8,
  },
  memberBio: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 24,
  },
  contactButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
