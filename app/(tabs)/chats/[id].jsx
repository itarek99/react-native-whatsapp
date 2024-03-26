import messagesData from "@/assets/data/messages.json";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Bubble, GiftedChat, InputToolbar, Send, SystemMessage } from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatMessageBox from "../../../components/ChatMessageBox";
import ReplyMessageBar from "../../../components/ReplyMessageBar";
const SingleChat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState();
  const { bottom } = useSafeAreaInsets();

  const [replyMessage, setReplyMessage] = useState(null);
  const swipeableRowRef = useRef();

  useEffect(() => {
    setMessages([
      ...messagesData.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: {
            _id: message.from,
            name: message.from ? "You" : "Bob",
          },
        };
      }),
      {
        _id: 0,
        system: true,
        text: "All your base are belong to us",
        createdAt: new Date(),
        user: {
          _id: 0,
          name: "Bot",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  const updateRowRef = useCallback(
    (ref) => {
      if (ref && replyMessage && ref.props.children.props.currentMessage?._id === replyMessage._id) {
        swipeableRowRef.current = ref;
      }
    },
    [replyMessage]
  );

  useEffect(() => {
    if (replyMessage && swipeableRowRef.current) {
      swipeableRowRef.current.close();
      swipeableRowRef.current = null;
    }
  }, [replyMessage]);

  return (
    <ImageBackground
      style={[styles.chatContainer, { marginBottom: bottom }]}
      source={require("@/assets/images/pattern.png")}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        bottomOffset={bottom}
        textInputProps={styles.composer}
        onInputTextChanged={setText}
        renderSystemMessage={(props) => <SystemMessage {...props} />}
        renderBubble={(props) => (
          <Bubble
            {...props}
            textStyle={{
              right: {
                color: "#000",
              },
            }}
            wrapperStyle={{
              left: {
                backgroundColor: "#fff",
              },
              right: {
                backgroundColor: Colors.lightGreen,
              },
            }}
          />
        )}
        maxComposerHeight={100}
        renderAvatar={null}
        renderSend={(props) => (
          <View style={styles.sendContainer}>
            {text.length > 0 && (
              <Send {...props} containerStyle={{ justifyContent: "center" }}>
                <Ionicons name="send" color={Colors.primary} size={28} />
              </Send>
            )}
            {text.length == 0 && (
              <>
                <Ionicons name="camera-outline" color={Colors.primary} size={28} />
                <Ionicons name="mic-outline" color={Colors.primary} size={28} />
              </>
            )}
          </View>
        )}
        renderInputToolbar={(props) => (
          <InputToolbar
            containerStyle={{
              backgroundColor: Colors.background,
            }}
            {...props}
            renderActions={() => (
              <View
                style={{
                  height: 44,
                  justifyContent: "center",
                  left: 6,
                }}>
                <Ionicons name="add" size={28} color={Colors.primary} />
              </View>
            )}
          />
        )}
        renderMessage={(props) => (
          <ChatMessageBox {...props} updateRowRef={updateRowRef} setReplyOnSwipeOpen={setReplyMessage} />
        )}
        renderChatFooter={() => <ReplyMessageBar message={replyMessage} clearReply={() => setReplyMessage(null)} />}
      />
    </ImageBackground>
  );
};

export default SingleChat;

const styles = StyleSheet.create({
  composer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    paddingTop: 8,
    paddingHorizontal: 8,
    marginVertical: 4,
    fontSize: 16,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  sendContainer: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingHorizontal: 14,
  },
});
