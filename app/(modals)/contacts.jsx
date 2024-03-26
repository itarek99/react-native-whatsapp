import contacts from "@/assets/data/contacts";
import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AlphabetList } from "react-native-section-alphabet-list";
import { defaultStyles } from "../../constants/Styles";

const Contacts = () => {
  const data = contacts.map((contact, index) => ({
    value: `${contact.first_name} ${contact.last_name}`,
    name: `${contact.first_name} ${contact.last_name}`,
    img: contact.img,
    desc: contact.desc,
    key: `${contact.first_name} ${contact.last_name}-${index}`,
  }));
  return (
    <View style={{ flex: 1, paddingTop: 110, backgroundColor: Colors.background }}>
      <AlphabetList
        data={data}
        indexLetterStyle={{
          color: Colors.primary,
          fontSize: 12,
        }}
        indexContainerStyle={{
          width: 24,
          backgroundColor: Colors.background,
        }}
        style={{
          marginLeft: 24,
        }}
        renderCustomSectionHeader={(section) => (
          <View style={styles.section}>
            <Text>{section.title}</Text>
          </View>
        )}
        renderCustomItem={(item) => (
          <>
            <View style={styles.item}>
              <Image style={styles.itemImage} source={{ uri: item.img }} />
              <View>
                <Text style={{ color: "#000", fontSize: 14 }}>{item.value}</Text>
                <Text style={{ color: Colors.gray, fontSize: 12 }}>
                  {item.desc.length > 40 ? `${item.desc.substring(0, 40)}...` : item.desc}
                </Text>
              </View>
            </View>
            <View style={[defaultStyles.separator, { marginLeft: 50 }]} />
          </>
        )}
      />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.background,
    height: 30,
    paddingHorizontal: 14,
    justifyContent: "center",
  },

  item: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  itemImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
