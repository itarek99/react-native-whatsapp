import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaskInput from "react-native-mask-input";

import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  const { bottom } = useSafeAreaInsets();

  const openLink = () => {
    Linking.openURL("https://www.google.com");
  };

  const sentOtp = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`verify/${phone}`, phone);
    }, 200);
  };
  const trySignIn = async () => {};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={{ fontSize: 18, padding: 10 }}>Sending Code...</Text>
          </View>
        )}

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
            value={phone}
            onChangeText={(masked, unmasked) => {
              setPhone(masked);
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
          disabled={phone === ""}
          style={[styles.button, phone.length === 14 ? styles.buttonEnabled : null, { marginBottom: bottom }]}
          onPress={sentOtp}>
          <Text style={[styles.buttonText, phone.length === 14 ? styles.buttonEnabled : null]}>Next</Text>
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
