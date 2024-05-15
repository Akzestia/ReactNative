import React from "react";
import ts from '../images/gradientWallp3.jpeg'

import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { getGlassView, getGlassImage } from "../styles/GlassView";

const { width, height } = Dimensions.get("screen");

const GlassView: React.FC<{}> = () => {
  return (
    <View style={getGlassView(width, height)}>
      <Image blurRadius={10} source={ts}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width - 20,
          height: height - 180,
          borderRadius: 9,
          overflow: "hidden",
          backgroundColor: 'transparent',
          opacity: .72
        }}
      ></Image>
    </View>
  );
};

export default GlassView;
