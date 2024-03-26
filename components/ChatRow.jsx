import Colors from "@/constants/Colors";
import { format } from "date-fns";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import AppleStyleSwipeableRow from "./AppleStyleSwipeableRow";

const ChatRow = ({ id, from, date, img, msg, read, unreadCount }) => {
  return (
    <AppleStyleSwipeableRow>
      <Link href={`/(tabs)/chats/${id}`} asChild>
        <TouchableHighlight activeOpacity={0.6} underlayColor={Colors.lightGray}>
          <View style={styles.chatItem}>
            <Image source={{ uri: img }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.from}>{from}</Text>
              <Text style={styles.message}>{msg.length > 40 ? `${msg.substring(0, 40)}...` : msg}</Text>
            </View>
            <Text style={styles.date}>{format(date, "dd/MM/yy")}</Text>
          </View>
        </TouchableHighlight>
      </Link>
    </AppleStyleSwipeableRow>
  );
};

export default ChatRow;

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  from: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    color: Colors.gray,
    fontSize: 16,
  },

  date: {
    paddingRight: 20,
    alignSelf: "flex-start",
  },
});
