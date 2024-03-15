import calls from "@/assets/data/calls.json";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { CurvedTransition } from "react-native-reanimated";
import CallsEntry from "../../../components/CallsEntry";
import SegmentedControl from "../../../components/SegmentedControl";
import Colors from "../../../constants/Colors";
import { defaultStyles } from "../../../constants/Styles";

const transitions = CurvedTransition.delay(100);

const Calls = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useState(calls);
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
    if (selected === "All") {
      setItems(calls);
    } else {
      setItems(items.filter((item) => item.missed));
    }
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <SegmentedControl
              options={["All", "Missed"]}
              selectedOption={selectedOption}
              onOptionPress={handleOptionChange}
            />
          ),
          headerLeft: () => (
            <Pressable onPress={handleEdit}>
              <Text style={styles.editBtnText}>{isEditing ? "Done" : "Edit"}</Text>
            </Pressable>
          ),
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Animated.View style={defaultStyles.block} layout={transitions}>
          <Animated.FlatList
            skipEnteringExitingAnimations
            scrollEnabled={false}
            data={items}
            itemLayoutAnimation={transitions}
            ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => <CallsEntry data={item} index={index} />}
          />
        </Animated.View>
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
