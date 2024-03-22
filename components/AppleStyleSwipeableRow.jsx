import Colors from "@/constants/Colors";
import React, { useRef } from "react";
import { Animated, I18nManager, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

const AppleStyleSwipeableRow = ({ children }) => {
  const renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      close();
      // eslint-disable-next-line no-alert
      window.alert(text);
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton style={[styles.rightAction, { backgroundColor: color }]} onPress={pressHandler}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress, _dragAnimatedValue) => (
    <View
      style={{
        width: 192,
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
      }}>
      {renderRightAction("More", "#C8C7CD", 192, progress)}
      {renderRightAction("Archive", Colors.muted, 128, progress)}
    </View>
  );

  const swipeableRow = useRef();

  const close = () => {
    swipeableRow?.current?.close();
  };

  return (
    <Swipeable
      ref={swipeableRow}
      friction={2}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      rightThreshold={40}
      renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
};

export default AppleStyleSwipeableRow;

const styles = StyleSheet.create({
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
