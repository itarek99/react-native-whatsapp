import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Colors from "../../../constants/Colors";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerTransparent: false,
          headerBlurEffect: "regular",
          headerSearchBarOptions: {
            placeholder: "Search",
          },
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal-circle-outline" color={Colors.primary} size={30} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 30 }}>
              <TouchableOpacity>
                <Ionicons name="camera-outline" color={Colors.primary} size={30} />
              </TouchableOpacity>
              <Link href="/(modals)/contacts" asChild>
                <TouchableOpacity>
                  <Ionicons name="add-circle" color={Colors.primary} size={30} />
                </TouchableOpacity>
              </Link>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
