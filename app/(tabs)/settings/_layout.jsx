import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerSearchBarOptions: {
            placeholder: "Search Settings",
          },
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
