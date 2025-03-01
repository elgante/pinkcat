import { Text, View, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { meditations } from "@/meditation-data";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
//import audio from "@assets/meditations-audio/audio1.mp3";

import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedBackground from "@components/AnimatedBackground";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // const player = useAudioPlayer({
  //   uri: " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
  // });

  const formatCurrentTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text className="text-xl">Meditation not found</Text>;
  }
  const player = useAudioPlayer(meditation.audio);
  const status = useAudioPlayerStatus(player);

  return (
    <SafeAreaView className="bg-rose-200 flex-1 p-2">
      <AnimatedBackground />
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
        <Pressable
          onPress={() => (player.playing ? player.pause() : player.play())}
          className="bg-gray-500 self-center w-20 aspect-square rounded-full items-center justify-center"
        >
          <FontAwesome5
            name={status.playing ? "pause" : "play"}
            size={24}
            color="snow"
          />
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
                value={status.currentTime / status.duration}
                onSlidingComplete={(value) =>
                  player.seekTo(value * status.duration)
                }
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </View>

            <View className="flex-row justify-between">
              <Text>{formatCurrentTime(status.currentTime)}</Text>
              <Text>{formatCurrentTime(status.duration)}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
