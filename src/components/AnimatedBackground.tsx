// import { useEffect } from "react";
// import { useWindowDimensions, View } from "react-native";
// import Animated, {
//   Easing,
//   useSharedValue,
//   useAnimatedStyle,
//   withDelay,
//   withRepeat,
//   withTiming,
// } from "react-native-reanimated";

// export default function AnimatedBackground() {
//   const { height, width } = useWindowDimensions();

//   const top1 = useSharedValue(0.3 * height);
//   const top2 = useSharedValue(0.5 * height);
//   const top3 = useSharedValue(0.7 * height);

//   const size1 = useSharedValue(0.4 * width);
//   const size2 = useSharedValue(0.5 * width);
//   const size3 = useSharedValue(0.6 * width);

//   useEffect(() => {
//     const options = {
//       duration: 4000,
//       easing: Easing.bezier(0.5, 0, 0.5, 1),
//     };
//     top1.value = withRepeat(withTiming(0.2 * height, options), -1, true);
//     top2.value = withDelay(
//       1000,
//       withRepeat(withTiming(0.4 * height, options), -1, true)
//     );
//     top3.value = withDelay(
//       2000,
//       withRepeat(withTiming(0.6 * height, options), -1, true)
//     );

//     size1.value = withRepeat(withTiming(0.35 * width, options), -1, true);
//     size2.value = withRepeat(withTiming(0.45 * width, options), -1, true);
//     size3.value = withRepeat(withTiming(0.55 * width, options), -1, true);
//   }, []);

//   const animatedStyle1 = useAnimatedStyle(() => {
//     return {
//       top: top1.value,
//       width: size1.value,
//       height: size1.value,
//       borderRadius: size1.value / 2,
//       backgroundColor: "yellow",
//     };
//   });

//   const animatedStyle2 = useAnimatedStyle(() => {
//     return {
//       top: top2.value,
//       width: size2.value,
//       height: size2.value,
//       borderRadius: size2.value / 2,
//       backgroundColor: "lightyellow",
//     };
//   });

//   const animatedStyle3 = useAnimatedStyle(() => {
//     return {
//       top: top3.value,
//       width: size3.value,
//       height: size3.value,
//       borderRadius: size3.value / 2,
//       backgroundColor: "orange",
//     };
//   });

//   return (
//     <View
//       style={{
//         position: "absolute",
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         alignItems: "center",
//       }}
//     >
//       <Animated.View style={animatedStyle1} />
//       <Animated.View style={animatedStyle2} />
//       <Animated.View style={animatedStyle3} />
//     </View>
//   );
// }

// import { useEffect } from "react";
// import { useWindowDimensions, View } from "react-native";
// import Animated, {
//   Easing,
//   useSharedValue,
//   useAnimatedStyle,
//   withDelay,
//   withRepeat,
//   withTiming,
// } from "react-native-reanimated";

// export default function AnimatedBackground() {
//   const { height, width } = useWindowDimensions();

//   const top1 = useSharedValue(0.3 * height);
//   const top2 = useSharedValue(0.5 * height);
//   const top3 = useSharedValue(0.7 * height);

//   const size1 = useSharedValue(0.1 * width);
//   const size2 = useSharedValue(0.3 * width);
//   const size3 = useSharedValue(0.4 * width);

//   useEffect(() => {
//     const options = {
//       duration: 4000,
//       easing: Easing.bezier(0.5, 0, 0.5, 1),
//     };
//     top1.value = withRepeat(withTiming(0.2 * height, options), -1, true);
//     top2.value = withDelay(
//       1000,
//       withRepeat(withTiming(0.4 * height, options), -1, true)
//     );
//     top3.value = withDelay(
//       2000,
//       withRepeat(withTiming(0.6 * height, options), -1, true)
//     );

//     size1.value = withRepeat(withTiming(0.35 * width, options), -1, true);
//     size2.value = withRepeat(withTiming(0.45 * width, options), -1, true);
//     size3.value = withRepeat(withTiming(0.55 * width, options), -1, true);
//   }, []);

//   const animatedStyle1 = useAnimatedStyle(() => {
//     return {
//       top: top1.value,
//       width: size1.value,
//       height: size1.value,
//       borderRadius: size1.value / 2,
//       backgroundColor: "yellow",
//     };
//   });

//   const animatedStyle2 = useAnimatedStyle(() => {
//     return {
//       top: top2.value,
//       width: size2.value,
//       height: size2.value,
//       borderRadius: size2.value / 2,
//       backgroundColor: "lightyellow",
//     };
//   });

//   const animatedStyle3 = useAnimatedStyle(() => {
//     return {
//       top: top3.value,
//       width: size3.value,
//       height: size3.value,
//       borderRadius: size3.value / 2,
//       backgroundColor: "orange",
//     };
//   });

//   return (
//     <View
//       style={{
//         position: "absolute",
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         alignItems: "center",
//       }}
//     >
//       <Animated.View style={animatedStyle1} />
//       <Animated.View style={animatedStyle2} />
//       <Animated.View style={animatedStyle3} />
//     </View>
//   );
// }

import { useEffect } from "react";
import { useWindowDimensions, View } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedBackground() {
  const { height } = useWindowDimensions();

  const top1 = useSharedValue(0.3 * height);
  const top2 = useSharedValue(0.5 * height);
  const top3 = useSharedValue(0.7 * height);

  useEffect(() => {
    const options = {
      duration: 4000,
      easing: Easing.bezier(0.5, 0, 0.5, 1),
    };
    top1.value = withRepeat(withTiming(0.2 * height, options), -1, true);
    top2.value = withDelay(
      1000,
      withRepeat(withTiming(0.4 * height, options), -1, true)
    );
    top3.value = withDelay(
      2000,
      withRepeat(withTiming(0.6 * height, options), -1, true)
    );
  }, []);

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      top: top1.value,
      width: "400%",
      aspectRatio: 1,
      borderRadius: height * 5, //Very large number to make a circle.
      backgroundColor: "pink",
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      top: top2.value,
      width: "400%",
      aspectRatio: 1,
      borderRadius: height * 2,
      backgroundColor: "lightyellow",
    };
  });

  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      top: top3.value,
      width: "400%",
      aspectRatio: 1,
      borderRadius: height * 2,
      backgroundColor: "orange",
    };
  });

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
      }}
    >
      <Animated.View style={animatedStyle1} />
      <Animated.View style={animatedStyle2} />
      <Animated.View style={animatedStyle3} />
    </View>
  );
}
