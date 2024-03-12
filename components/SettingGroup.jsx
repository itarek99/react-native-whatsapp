import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { defaultStyles } from "../constants/Styles";
import BoxedIcon from "./BoxedIcon";

const SettingGroup = ({ data }) => {
  return (
    <View style={defaultStyles.block}>
      <FlatList
        data={data}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
        renderItem={({ item }) => (
          <View style={defaultStyles.item}>
            <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor} />
            <Text style={styles.settingTitle}>{item.name}</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
          </View>
        )}
      />
    </View>
  );
};

export default SettingGroup;

const styles = StyleSheet.create({
  settingTitle: {
    fontSize: 18,
    flex: 1,
  },
});
