import { Text, View, FlatList } from "react-native";

import { Meditation } from "@/types/meditation-types";

export function MeditatioListItem({ meditation }: { meditation: Meditation }) {
  return (
    <View className="p-5 border-2 border-gray-300 rounded-2xl">
      <Text className="font-semibold text-xl">{meditation.title}</Text>
      <Text>Duration: {meditation.duration} minutes</Text>
    </View>
  );
}
