import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
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
};

const pageSummaries: PageSummary[] = [
  {
    title: "Learn Life Skills",
    summary:
      "Discover essential life skills for personal growth and development.",
  },
  {
    title: "Cooking Classes",
    summary:
      "Master the art of cooking with our comprehensive guides and tutorials.",
  },
  {
    title: "Home & Garden",
    summary: "Transform your living space with gardening and landscaping tips.",
  },
  {
    title: "First Aid Training",
    summary: "Learn essential first aid skills to handle emergency situations.",
  },
  {
    title: "Sewing & Crafts",
    summary: "Develop creative skills with our sewing and crafting courses.",
  },
  {
    title: "Shop Resources",
    summary:
      "Browse and purchase essential tools and materials for your learning journey.",
    hasButton: true,
    buttonText: "Shop Now",
    navigateTo: "ItemSelection",
  },
];

export const HomePage = ({ navigation }: HomePageProps) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image
          source={require("../../images/logo.jpeg")}
          style={styles.headerImage}
        />
      ),
    });
  }, [navigation]);

  const handleNavigation = (navigateTo: keyof RootStackParamList) => {
    navigation.navigate("ItemSelection");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heading}>Welcome to Life Skills Academy</Text>
      </View>

      <Text style={styles.subheading}>Explore Our Programs</Text>
      <View style={styles.summaryGrid}>
        {pageSummaries.map((page, index) => (
          <View key={index} style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>{page.title}</Text>
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
