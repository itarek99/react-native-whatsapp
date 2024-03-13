import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../../constants/Colors";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Calls",
          headerShadowVisible: false,
          headerLargeTitle: true,
          headerBlurEffect: "regular",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerSearchBarOptions: {
            placeholder: "Search",
          },
          headerRight: () => (
            <Pressable>
              <Ionicons name="call-outline" size={24} color={Colors.primary} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
