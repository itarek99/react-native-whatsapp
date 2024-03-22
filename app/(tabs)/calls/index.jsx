import calls from "@/assets/data/calls.json";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, {
  CurvedTransition,
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CallsEntry from "../../../components/CallsEntry";
import SegmentedControl from "../../../components/SegmentedControl";
import SwipeableRow from "../../../components/SwipeableRow";
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

  const editing = useSharedValue(-30);

  const handleEdit = () => {
    let editingNew = !isEditing;
    editing.value = editingNew ? 0 : -30;
    setIsEditing(editingNew);
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const animatedRowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(editing.value) }],
    };
  }, [editing]);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
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
            renderItem={({ item, index }) => (
              <SwipeableRow onDelete={() => handleDelete(item.id)}>
                <Animated.View
                  style={[{ flexDirection: "row", alignItems: "center" }]}
                  entering={FadeInUp.delay(index * 10)}
                  exiting={FadeOutUp}>
                  <AnimatedPressable
                    onPress={() => handleDelete(item.id)}
                    style={[animatedRowStyle, { paddingLeft: 8 }]}>
                    <Ionicons name="remove-circle" size={24} color={Colors.red} />
                  </AnimatedPressable>
                  <CallsEntry animatedStyle={animatedRowStyle} data={item} index={index} />
                </Animated.View>
              </SwipeableRow>
            )}
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
