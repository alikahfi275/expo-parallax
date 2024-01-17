import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import images from "./assets/images/bg.jpeg";
import {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Animated, { interpolate } from "react-native-reanimated";
import SensorAnimated from "./src/SensorAnimated";
import layer1 from "./assets/images/Parallax/1.png";
import layer2 from "./assets/images/Parallax/2.png";
import layer3 from "./assets/images/Parallax/3.png";
import layer4 from "./assets/images/Parallax/4.png";
import layer5 from "./assets/images/Parallax/5.png";
import Parallax from "./src/Parallax";

export default function App() {
  return (
    <Animated.View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SensorAnimated images={images} /> */}
      <Parallax layers={[layer1, layer2, layer3, layer4, layer5]} />
    </Animated.View>
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
