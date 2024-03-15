import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

const Layout = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },

          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: Colors.background,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveBackgroundColor: Colors.background,
          tabBarActiveBackgroundColor: Colors.background,
        }}>
        <Tabs.Screen
          name="updates"
          options={{
            title: "Updates",
            tabBarIcon: ({ size, color }) => <MaterialIcons name="update" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            headerShown: false,
            title: "Calls",
            tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="phone-outline" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="communities"
          options={{
            title: "Communities",
            tabBarIcon: ({ size, color }) => <MaterialIcons name="people" size={size + 1} color={color} />,
          }}
        />
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            tabBarIcon: ({ size, color }) => <Ionicons name="chatbubbles" size={size - 1} color={color} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            title: "Settings",
            tabBarIcon: ({ size, color }) => <Ionicons name="cog" size={size} color={color} />,
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
