import { Stack } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ title: "Meditation" }} /> */}
      {/* <Stack screenOptions={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="chat-with-cat"
        options={{ title: "Chat with Cat", headerShown: true }}
      />
    </Stack>
  );
}
