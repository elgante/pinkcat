import React from "react";
import { View, Image } from "react-native";
import { Bubble, InputToolbar, Send } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";

// Customize the Bubble for messages
export const renderBubble = (props: any) => (
  <Bubble
    {...props}
    wrapperStyle={{
      right: {
        backgroundColor: "#df939d", // darkish salmon pink
      },
      left: {
        backgroundColor: "#f0f0f0", // graycolor for bot messages
      },
    }}
    textStyle={{
      right: {
        color: "#fff", // White text for user messages
      },
      left: {
        color: "#000", // Black text for bot messages
      },
    }}
  />
);

// Customize the Input Toolbar
export const renderInputToolbar = (props: any) => (
  <InputToolbar
    {...props}
    containerStyle={{
      borderTopWidth: 1,
      borderTopColor: "#e6e6e6",
      borderRadius: 15,
    }}
  />
);

// Render the avatar for bot or user
export const renderAvatar = (props: any) => {
  if (props.currentMessage.user._id === 2) {
    return (
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          overflow: "hidden",
        }}
      >
        <Image
          source={require("@assets/avatar/pinkCat.jpeg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
    );
  }
  return null;
};

// Render send button
export const renderSendIcon = (props: any) => (
  <Send {...props}>
    <Ionicons
      name="send"
      size={25}
      color="#df939d"
      style={{ marginBottom: 8, marginRight: 5 }}
    />
  </Send>
);
