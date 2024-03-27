import communityImage from "@/assets/images/communities.jpg";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";

const Communities = () => {
  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.contentBox}>
        <Image style={styles.communityImage} source={communityImage} />
        <Text style={styles.title}>Stay connected with a community</Text>
        <Text style={styles.description}>
          Communities bring members together in topic based groups. Any community you're added to wil appear here.
        </Text>

        <Pressable style={styles.exampleButton}>
          <Text style={styles.exampleButtonText}>See example communities</Text>
          <Ionicons name="chevron-forward" size={18} color={Colors.primary} />
        </Pressable>

        <Pressable style={styles.newButton}>
          <Ionicons name="add" size={24} color={"#fff"} />
          <Text style={styles.newButtonText}>New Community</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Communities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentBox: {
    padding: 20,
  },
  communityImage: {
    width: "100%",
    height: 236,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    marginTop: 24,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: Colors.gray,
    marginTop: 12,
  },

  exampleButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
  },

  exampleButtonText: {
    color: Colors.primary,
    fontSize: 15,
  },

  newButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 24,
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    marginHorizontal: 8,
  },

  newButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
  },
});
