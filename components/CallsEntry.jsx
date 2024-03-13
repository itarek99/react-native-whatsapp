import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CallsEntry = ({ data }) => {
  return (
    <View>
      <Image style={styles.avatar} source={{ uri: data.img }} />
      <Text>{data.name}</Text>
    </View>
  );
};

export default CallsEntry;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
});
