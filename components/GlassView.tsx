import React from "react";
import ts from '../images/wallp3.jpg'

import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { getGlassView, getGlassImage } from "../styles/GlassView";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("screen");

const GlassView: React.FC<{}> = () => {
  return (
    <View style={getGlassView(width, height)}>
      <Image blurRadius={10} source={ts}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width - 50,
          height: height - 200,
          borderRadius: 9,
          overflow: "hidden",
          backgroundColor: 'transparent',
          opacity: 0.9
        }}
      ></Image>
    </View>
  );
};

export default GlassView;
