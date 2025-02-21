import { Text, View, FlatList, Pressable } from "react-native";
import { Meditation } from "@/types/meditation-types";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";

export function MeditatioListItem({ meditation }: { meditation: Meditation }) {
  return (
    <Link href={`/meditation/${meditation.id}`} asChild>
      <Pressable className="p-5 border-2 border-gray-300 rounded-2xl">
        <Text className="font-semibold text-xl">{meditation.title}</Text>

        <View className="flex-row items-center gap-1">
          <FontAwesome6 name="clock-four" size={14} color="gray" />
          <Text className="text-gray-600">{meditation.duration} min</Text>
        </View>
      </Pressable>
    </Link>
  );
}
