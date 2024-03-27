import channels from "@/assets/data/calls.json";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";

const Status = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Status</Text>
      <View style={styles.statusCard}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://pbs.twimg.com/profile_images/1564203599747600385/f6Lvcpcu_400x400.jpg",
              }}
              style={{ width: 60, height: 60, borderRadius: 50 }}
            />
            <Pressable style={styles.addButton}>
              <Ionicons name="add" size={20} color={"#fff"} />
            </Pressable>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>My Status</Text>
            <Text style={{ color: Colors.gray }}>Add to my status</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <Pressable style={styles.statusButton}>
            <Ionicons name="camera" size={20} color={Colors.primary} />
          </Pressable>
          <Pressable style={styles.statusButton}>
            <Ionicons name="pencil" size={18} color={Colors.primary} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const ChannelCard = ({ channel }) => {
  return (
    <View
      style={{
        padding: 12,
        borderColor: Colors.lightGray,
        borderWidth: 1,
        borderRadius: 24,
        alignItems: "center",
        width: 140,
      }}>
      <Image source={{ uri: channel.img }} height={60} width={60} style={{ borderRadius: 50 }} />
      <Text style={{ marginTop: 8, fontSize: 16, fontWeight: "500" }}>{channel.name}</Text>
      <Pressable
        style={{
          backgroundColor: "#d9e4f2",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 16,
          marginTop: 8,
          width: 120,
          alignItems: "center",
        }}>
        <Text style={{ color: "#033b85", fontSize: 16, fontWeight: "600" }}>Follow</Text>
      </Pressable>
    </View>
  );
};

const Channels = () => {
  return (
    <View style={{ marginTop: 24 }}>
      <View
        style={{
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 18,
        }}>
        <Text style={styles.sectionTitle}>Channels</Text>
        <Pressable style={{ backgroundColor: Colors.lightGray, padding: 2, borderRadius: 30 }}>
          <Ionicons name="add" size={20} color={Colors.primary} />
        </Pressable>
      </View>

      <View style={{ backgroundColor: "#fff" }}>
        <Text style={{ padding: 18, color: Colors.gray, fontSize: 16, lineHeight: 20 }}>
          Stay updated on topics that matter to you. Find channels to follow below.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 18,
            paddingBottom: 10,
          }}>
          <Text style={{ fontSize: 16, color: Colors.gray }}>FIND CHANNELS</Text>
          <Pressable>
            <Ionicons name="chevron-down" size={18} color={Colors.gray} />
          </Pressable>
        </View>

        <View style={{ paddingLeft: 18, paddingBottom: 18 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={channels}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            renderItem={({ item }) => <ChannelCard channel={item} />}
          />
        </View>
        <View style={{ paddingLeft: 18, marginBottom: 18, flexDirection: "row" }}>
          <Pressable
            style={{ backgroundColor: Colors.primary, paddingVertical: 10, paddingHorizontal: 22, borderRadius: 50 }}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>Explore More</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const Updates = () => {
  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.contentBox}>
        <Status />
        <Channels />
      </View>
    </ScrollView>
  );
};

export default Updates;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },

  section: {
    marginTop: 12,
  },

  sectionTitle: {
    paddingHorizontal: 18,
    fontSize: 24,
    fontWeight: "600",
  },

  statusCard: {
    marginTop: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: 60,
    width: 60,
    position: "relative",
  },

  addButton: {
    backgroundColor: Colors.primary,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    position: "absolute",
    bottom: -2,
    right: -2,
  },

  statusButton: {
    backgroundColor: Colors.background,
    height: 36,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
