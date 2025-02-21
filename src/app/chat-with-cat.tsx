import React, { useState, useCallback } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import {
  renderBubble,
  renderInputToolbar,
  renderAvatar,
  renderSendIcon,
} from "@components/chat-with-cat-component";
import { useBotResponse } from "@hooks/useBotResponse";

const initialMessages = [
  {
    _id: 1,
    text: "Hi there! How are you doing today?",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "Bot",
      avatar: require("@assets/avatar/pinkCat.jpeg"),
    },
  },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState<IMessage[]>(initialMessages);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const { getBotResponse } = useBotResponse(setMessages, setIsTyping);

  ///////////////////////////////////////////////////////////////

  // Function to simulate typing and get a bot response
  //////////////////////////////////////////////////////////////

  const simulateTyping = useCallback(
    async (userMessage: string) => {
      setIsTyping(true); // Start typing indicator

      // Simulate typing delay (e.g., 2 seconds)
      setTimeout(async () => {
        setIsTyping(false); // Stop typing indicator
        await getBotResponse(userMessage); // Get bot's response
      }, 2000); // Typing simulation delay (2 seconds)
    },
    [getBotResponse]
  );

  //////////////////////////////////////////////////////////////

  // Function to handle sending user messages
  //////////////////////////////////////////////////////////////

  const onSend = useCallback(
    async (newMessages: IMessage[] = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessages)
      );

      // Get the latest user message
      const userMessage = newMessages[0]?.text;

      //   // Call OpenAI API for a response
      //   if (userMessage) {
      //     await getBotResponse(userMessage);
      //   }
      // }, []);

      // Simulate typing and get the bot response
      if (userMessage) {
        simulateTyping(userMessage);
      }
    },
    [simulateTyping]
  );

  return (
    <ImageBackground
      source={require("@assets/background/Designer4.3.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.chatContainer}>
          <GiftedChat
            messages={messages}
            onSend={(newMessages) => onSend(newMessages)}
            user={{
              _id: 1,
              name: "User",
            }}
            renderBubble={renderBubble}
            renderInputToolbar={renderInputToolbar}
            isTyping={isTyping}
            renderAvatar={renderAvatar}
            scrollToBottom
            listViewProps={{
              showsVerticalScrollIndicator: false,
            }}
            renderSend={renderSendIcon}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chatContainer: {
    flex: 1,
    width: "80%", //I dont think that is needed
    maxWidth: 450,
    padding: 10,
    marginBottom: 450,
  },
});
