import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View, SafeAreaView } from "react-native";

import ButtonX from './components/button';

const { width, height } = Dimensions.get("window");

export default function App() {
  const [counter, setCounter] = useState<number>();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "transparent",
        height: height + 50,
        width: width,
      }}
    >
    	<ButtonX/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
