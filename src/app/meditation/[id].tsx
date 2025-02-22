import { Text, View, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { meditations } from "@/meditation-data";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text className="text-xl">Meditation not found</Text>;
  }
  return (
    <SafeAreaView className="bg-rose-200 flex-1 p-2">
      {/* HEADER */}
      <View className=" flex-1">
        <View className=" flex-1">
          <View className=" flex-row items-center justify-between p-10">
            <AntDesign name="infocirlceo" size={16} color="black" />

            <View className="bg-gray-900 p-2 rounded-md">
              <Text className="text-zinc-100 font-semibold">
                Today's meditation
              </Text>
            </View>

            <AntDesign
              onPress={() => router.back()}
              name="close"
              size={24}
              color="black"
            />
          </View>
          <Text className="text-xl mt-10 text-center font-semibold">
            {meditation?.title}
          </Text>
        </View>

        {/* PLAY/PAUSE button */}
        <Pressable className="bg-gray-500 self-center w-20 aspect-square rounded-full items-center justify-center">
          <FontAwesome5 name="play" size={24} color="snow" />
        </Pressable>

        {/* FOOTER: player  */}
        <View className=" flex-1">
          <View className="p-5">
            <View className="flex-row justify-between ">
              <MaterialIcons name="airplay" size={24} color="black" />
              <MaterialCommunityIcons name="cog" size={24} color="black" />
            </View>

            {/* Playback */}
            <View>
              <Slider
                style={{ width: "100%", height: 40 }}
                value={0.5}
                onSlidingComplete={(value) => console.log(value)}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </View>

            <View className="flex-row justify-between">
              <Text>03:24</Text>
              <Text>13:00</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
