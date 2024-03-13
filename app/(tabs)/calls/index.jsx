import calls from "@/assets/data/calls.json";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CallsEntry from "../../../components/CallsEntry";
import Colors from "../../../constants/Colors";

const Calls = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useState(calls);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable onPress={handleEdit}>
              <Text style={styles.editBtnText}>{isEditing ? "Done" : "Edit"}</Text>
            </Pressable>
          ),
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <FlatList
          scrollEnabled={false}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CallsEntry data={item} />}
        />
      </ScrollView>
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  editBtnText: {
    color: Colors.primary,
    fontSize: 18,
  },
});
