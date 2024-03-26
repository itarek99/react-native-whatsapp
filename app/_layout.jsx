import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const router = useRouter();

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const getPhone = async () => {
    const token = await SecureStore.getItemAsync("phone");
    if (token) {
      router.replace("/(tabs)/chats");
    }
  };

  useEffect(() => {
    getPhone();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="phone" options={{ headerTitle: "Enter Your Mobile Number", headerBackVisible: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/contacts"
        options={{
          presentation: "modal",
          headerTitle: "New Chat",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerSearchBarOptions: {
            placeholder: "Search By Name Or Number",
            hideWhenScrolling: false,
          },
          headerRight: () => (
            <Link href={`/(tabs)/chats`} asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.lightGray,
                  borderRadius: 20,
                  padding: 4,
                }}>
                <Ionicons name="close" color={Colors.gray} size={24} />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

const MainLayout = () => {
  return <InitialLayout />;
};

export default MainLayout;
