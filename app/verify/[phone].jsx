import Colors from "@/constants/Colors";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";

const CELL_COUNT = 6;

const Phone = () => {
  const { phone, signIn } = useLocalSearchParams();
  const [code, setCode] = useState("");
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value: code, setValue: setCode });

  useEffect(() => {
    if (code.length === 6) {
      if (signIn === "true") {
        verifySignIn();
      } else {
        verifyCode();
      }

      console.log("code", code);
    }
  }, [code]);

  const verifyCode = () => {};
  const verifySignIn = () => {};
  const resendCode = () => {};

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: phone }} />
      <Text style={styles.legal}>We have sent you a SMS with a code to the number above.</Text>
      <Text style={styles.legal}>
        To complete your phone number verification, please enter the 6-digits verification code.
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={resendCode}>
        <Text style={styles.buttonText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },

  legal: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary,
  },

  codeFieldRoot: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    gap: 10,
  },

  cellRoot: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },

  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
    width: 40,
  },

  focusCell: {
    paddingBottom: 4,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});
