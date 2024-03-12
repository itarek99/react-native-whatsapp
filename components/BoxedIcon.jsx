import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

const BoxedIcon = ({ name, backgroundColor }) => {
  return (
    <View style={{ backgroundColor, padding: 4, borderRadius: 6 }}>
      <Ionicons name={name} size={22} color="white" />
    </View>
  );
};

export default BoxedIcon;

const styles = StyleSheet.create({});
