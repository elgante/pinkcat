// import { Text } from "react-native";

// export default function HomeScreen() {
//   return (
//     <Text className="font-bold text-4xl p-10 bg-red-500">
//       Welcome to the Home Screen!
//     </Text>
//   );
// }
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-200 p-10">
      <Text className="font-bold text-4xl text-white mb-8">
        Welcome to the Home Screen!
      </Text>
      <View className="w-64">
        <TouchableOpacity
          className="bg-pink-300 px-6 py-3 rounded-lg mb-4 items-center"
          onPress={() => router.push("/meditations")}
        >
          <Text className="text-white text-lg font-semibold">Meditate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-pink-300 px-6 py-3 rounded-lg mb-4 items-center"
          onPress={() => router.push("/name-emotion")}
        >
          <Text className="text-white text-lg font-semibold">
            Name an Emotion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-pink-300 px-6 py-3 rounded-lg items-center"
          onPress={() => router.push("/chat-with-cat")}
        >
          <Text className="text-white text-lg font-semibold">
            Chat with Cat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
