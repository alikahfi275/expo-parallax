import { View, Text } from "react-native";
import React from "react";
import SensorAnimated from "./SensorAnimated";

const Parallax = ({ layers }) => {
  return (
    <>
      {layers.map((layer, index) => (
        <SensorAnimated key={index} images={layer} />
      ))}
    </>
  );
};

export default Parallax;
