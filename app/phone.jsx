import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { KeyboardAvoidingView, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaskInput from "react-native-mask-input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  const { bottom } = useSafeAreaInsets();

  const openLink = () => {
    Linking.openURL("https://www.google.com");
  };

  const setUserNumber = async () => {
    await SecureStore.setItemAsync("phone", phoneNumber);
    router.push("/(tabs)/chats");
  };

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.description}>
          React Native Whatsapp need to verify your account. Career charge may apply.
        </Text>

        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.itemText}>Bangladesh</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
          </View>
          <View style={styles.separator} />
          <MaskInput
            keyboardType="phone-pad"
            style={styles.input}
            autoFocus
            placeholder="+8801XXXXXXXXX"
            value={phoneNumber}
            onChangeText={(masked, unmasked) => {
              setPhoneNumber(masked);
            }}
            mask={["+", "8", "8", "0", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
          />
        </View>
        <Text style={styles.description}>
          Read our{" "}
          <Text style={styles.link} onPress={openLink}>
            Privacy Policy
          </Text>
          . {'Tap "Agree & Continue" to accept the '}
          <Text style={styles.link} onPress={openLink}>
            Terms of Service
          </Text>
          .
        </Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          disabled={phoneNumber === ""}
          style={[styles.button, phoneNumber.length === 14 ? styles.buttonEnabled : null, { marginBottom: bottom }]}
          onPress={setUserNumber}>
          <Text style={[styles.buttonText, phoneNumber.length === 14 ? styles.buttonEnabled : null]}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    alignItems: "center",
    backgroundColor: Colors.background,
  },

  list: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginBottom: 10,
  },

  itemText: {
    fontSize: 18,
    color: Colors.primary,
  },

  separator: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
    backgroundColor: Colors.gray,
    opacity: 0.5,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.gray,
  },
  link: {
    color: Colors.primary,
  },

  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 10,
  },
  buttonEnabled: {
    backgroundColor: Colors.primary,
    color: "#fff",
  },
  buttonText: {
    color: Colors.gray,
    fontSize: 22,
    fontWeight: "500",
  },

  input: {
    width: "100%",
    padding: 6,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
