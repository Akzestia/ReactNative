import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import ThemeSwitch from "./components/ThemeSwitch";
import GlassView from "./components/GlassView";

const { width, height } = Dimensions.get("screen");

const ToDo: React.FC<{}> = () => {
  useEffect(() => {}, []);

  return <SafeAreaView>
        <ThemeSwitch></ThemeSwitch>
        <GlassView></GlassView>
  </SafeAreaView>;
};

export default ToDo;

const styles = StyleSheet.create({
  SafeArea: {
    width: width,
    height: height,
  },
});
