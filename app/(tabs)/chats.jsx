import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Page = () => {
  const router = useRouter();
  const handleLogout = async () => {
    SecureStore.deleteItemAsync("phone");
    router.replace("/");
    console.log("Logout");
  };
  return (
    <View>
      <Text>App Inside</Text>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
