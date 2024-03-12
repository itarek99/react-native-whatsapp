import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import SettingGroup from "../../../components/SettingGroup";
import Colors from "../../../constants/Colors";
import settings from "../../../data/settings";

const Settings = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("phone");
    router.replace("/");
  };
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SettingGroup data={settings.devices} />
        <SettingGroup data={settings.items} />
        <SettingGroup data={settings.support} />
        <Pressable onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  logoutText: {
    color: Colors.primary,
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 20,
  },
});
