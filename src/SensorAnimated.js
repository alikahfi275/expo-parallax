import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import bg from "../assets/images/bg.jpeg";
import {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Animated, { interpolate } from "react-native-reanimated";

const IMAGE_OFFSET = 100;
const PI = Math.PI;
const HALF_PI = PI / 3;

export default function SensorAnimated({ images }) {
  const { width, height } = useWindowDimensions();
  const sensor = useAnimatedSensor(SensorType.ROTATION);

  const imageStyle = useAnimatedStyle(() => {
    const { yaw, pitch, roll } = sensor.sensor.value;

    return {
      top: withTiming(
        interpolate(pitch, [-HALF_PI, HALF_PI], [-IMAGE_OFFSET * 2, 0]),
        {
          duration: 100,
        }
      ),
      left: withTiming(interpolate(roll, [PI, PI], [-IMAGE_OFFSET * 2, 0]), {
        duration: 100,
      }),
    };
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.Image
        resizeMode={"cover"}
        source={images}
        style={[
          {
            width: width + 2 * IMAGE_OFFSET,
            height: height + 2 * IMAGE_OFFSET,
            position: "absolute",
          },
          imageStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: "100%",
    height: "100%",
  },
});
