import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import Colors from "../constants/Colors";
import { defaultStyles } from "../constants/Styles";

const CallsEntry = ({ data, animatedStyle }) => {
  return (
    <Animated.View style={[defaultStyles.item, animatedStyle]}>
      <Image style={styles.avatar} source={{ uri: data.img }} />
      <View style={styles.detailContainer}>
        <Text style={data.missed ? styles.missed : styles.picked}>{data.name}</Text>

        <View style={styles.callType}>
          <Ionicons name={data.video ? "videocam" : "call"} size={16} color={Colors.gray} />
          <Text style={styles.callTypeText}>{data.incoming ? "Incoming" : "Outgoing"}</Text>
        </View>
      </View>
      <View style={styles.callInfo}>
        <Text style={styles.callInfoDate}>{format(data.date, "MM/dd/yy")}</Text>
        <Ionicons name="information-circle-outline" size={24} color={Colors.primary} />
      </View>
    </Animated.View>
  );
};

export default CallsEntry;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },

  detailContainer: {
    flex: 1,
    gap: 2,
  },

  missed: {
    color: "red",
    fontSize: 18,
  },

  picked: {
    color: "black",
    fontSize: 18,
  },

  callType: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  callTypeText: {
    color: Colors.gray,
    flex: 1,
  },

  callInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  callInfoDate: {
    color: Colors.gray,
  },
});
