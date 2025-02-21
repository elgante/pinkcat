import { useState } from "react";
import axios from "axios";
import { type IMessage, GiftedChat } from "react-native-gifted-chat";
//import { OPENAI_API_KEY } from "@env";

// Replace this with your OpenAI API Key
//const API_KEY = OPENAI_API_KEY;

export const useBotResponse = (
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // Function to fetch bot response from OpenAI
  const getBotResponse = async (userMessage: string) => {
    setIsTyping(true); // Show typing indicator

    try {
      console.log("Sending request to OpenAI API...");
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: userMessage },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            //Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
      console.log("Received response from OpenAI API:", response.data);

      const botReply = response.data.choices[0].message?.content;

      if (botReply) {
        const botMessage: IMessage = {
          _id: Math.random().toString(),
          text: botReply,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Bot",
            avatar: require("@assets/avatar/pinkCat.jpeg"),
          },
        };

        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [botMessage])
        );
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
    } finally {
      setIsTyping(false); // Stop typing indicator
    }
  };

  return { getBotResponse };
};
