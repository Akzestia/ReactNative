import React, { useState, useEffect } from "react";

import {
  View,
  Animated,
  Image,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import ts from "./images/ArchFireLogo-removebg-preview.png";
import { SvgUri } from "react-native-svg";
import { getArchFlame, getArchImage, getArchView } from "./styles/Arch";
import { AnimatedView } from "react-native-reanimated/lib/typescript/reanimated2/component/View";

const { width, height } = Dimensions.get("screen");

const Login: React.FC<{}> = () => {
  const ScaleY = new Animated.Value(.48);
  const ScaleX = new Animated.Value(.48);
  const OffsetX = new Animated.Value(0);
  const OffsetX_N = new Animated.Value(0);
  const FlameOffsetY = new Animated.Value(410);
  const FlameWidth = new Animated.Value(0.001);//1.4
  const FlameHeight = new Animated.Value(0.001);//1.2
const Color = new Animated.Value(0);

  const animate = () => {
	Animated.parallel([
        Animated.timing(ScaleX, {
          toValue: 1,
          duration: 2000, // Adjust duration for desired speed (in milliseconds)
          useNativeDriver: false,
        }),
        Animated.timing(ScaleY, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]).start(() => {
		setTimeout(() => {
			animateFlame();
		}, 100);
	  });
  };

  const animateSides = () => {
    Animated.parallel([
      Animated.timing(OffsetX, {
        toValue: 300,
        duration: 570, // Adjust duration for desired speed (in milliseconds)
        useNativeDriver: false,
      }),
      Animated.timing(OffsetX_N, {
        toValue: -300,
        duration: 570,
        useNativeDriver: false,
      }),
	  Animated.timing(Color, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }),
	  Animated.timing(FlameWidth, {
		toValue: 0.001,
		duration: 0,
		useNativeDriver: false,
	  }),
	  Animated.timing(FlameHeight, {
		  toValue: 0.001,
		  duration: 0,
		  useNativeDriver: false,
		}),
    ]).start(() => {});
  };

  const animateFlame = () => {
	Animated.parallel([
		Animated.timing(FlameOffsetY, {
		  toValue: 440,
		  duration: 1200, // Adjust duration for desired speed (in milliseconds)
		  useNativeDriver: false,
		}),
		Animated.timing(FlameWidth, {
		  toValue: 1.4,
		  duration: 870,
		  useNativeDriver: false,
		}),
		Animated.timing(FlameHeight, {
			toValue: 1.2,
			duration: 870,
			useNativeDriver: false,
		  }),
	  ]).start(() => {
		setTimeout(() => {
			animateSides();
		}, 100);
	  });
  }

  useEffect(() => {
	  animate();
  }, [])

  return (
    <View style={styles.viewX}>
		<Animated.View style={getArchFlame(FlameOffsetY, FlameWidth, FlameHeight)}>

		</Animated.View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Animated.View style={getArchView(OffsetX_N)}>
          <Animated.Image
            style={getArchImage(ScaleX, ScaleY, 100)}
            source={ts}
          ></Animated.Image>
        </Animated.View>
        <Animated.View style={getArchView(OffsetX)}>
          <Animated.Image
            style={getArchImage(ScaleX, ScaleY, -100)}
            source={ts}
          ></Animated.Image>
        </Animated.View>
      </View>

      {/* <Button title="Click" onPress={() => animate()}></Button>
      <Button title="Click" onPress={() => animateSides()}></Button>
	  <Button title="Click" onPress={() => animateFlame()}></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewX: {
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  logo: {
    width: 200,
    height: 200,
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
    backgroundColor: "transparent",
  },
});

export default Login;
