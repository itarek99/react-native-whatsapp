import chats from "@/assets/data/chats";
import ChatRow from "@/components/ChatRow";
import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { defaultStyles } from "../../../constants/Styles";

const Page = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingBottom: 40,
        backgroundColor: "#ffffff",
      }}>
      <FlatList
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        data={chats}
        ItemSeparatorComponent={() => <View style={[defaultStyles.separator, { marginLeft: 90 }]} />}
        renderItem={({ item }) => <ChatRow {...item} />}
      />
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({});
