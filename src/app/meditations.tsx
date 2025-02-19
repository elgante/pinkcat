import { Text, View, FlatList } from "react-native";
import { meditations } from "@/meditation-data";
import { MeditatioListItem } from "@components/meditation-list-item";

export default function MeditationScreen() {
  return (
    <FlatList
      data={meditations}
      className="bg-white"
      contentContainerClassName="gap-5 p-3"
      renderItem={({ item }) => <MeditatioListItem meditation={item} />}
    />
  );
}
