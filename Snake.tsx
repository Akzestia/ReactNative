import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Animated,
  Dimensions,
  GestureResponderEvent,
} from "react-native";
import { getSnakeStyle, getSnakeWrapperStyle } from "./styles/Snake";
import {
  PanGestureHandler,
  GestureHandlerRootView,
  GestureEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const snakeWidth = 50;
const snakeLength = 50;

const Snake: React.FC<{}> = () => {
  const top = new Animated.Value(height * 0.5 - snakeWidth / 2);
  const left = new Animated.Value(width * 0.5 - snakeWidth / 2);

  const [offsetX, SetoffsetX] = React.useState<number>(height * 0.5 - snakeWidth / 2)
  const [offsetY, SetoffsetY] = React.useState<number>(width * 0.5 - snakeWidth / 2);

  const [axisXY, setAxisXY] = React.useState<{ X: number; Y: number }>({
    X: 0,
    Y: 0,
  });
  var tempY: number = height * 0.5 - snakeWidth / 2, tempX: number = width * 0.5 - snakeWidth / 2;

  const [direction, SetDirection] = React.useState<string>("u");

  const handleSwipe = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { translationX, translationY, absoluteX, absoluteY } =
      event.nativeEvent;
    // const swipeStartX = absoluteX;
    // const swipeStartY = absoluteY;

    const swipeDiffX = translationX;
    const swipeDiffY = translationY;
    const swipeThreshold = 50;

    if (Math.abs(swipeDiffX) > swipeThreshold) {
      if (swipeDiffX > 0) {
        console.log("RIGHT");
        if (direction != "r") {
          SetDirection("r");
        }
      } else {
        console.log("LEFT");
        if (direction != "l") {
          SetDirection("l");
        }
      }
    } else if (Math.abs(swipeDiffY) > swipeThreshold) {
      if (swipeDiffY > 0) {
        console.log("DOWN");
        if (direction != "d") {
          SetDirection("d");
        }
      } else {
        console.log("UP");
        if (direction != "u") {
          SetDirection("u");
        }
      }
    }
  };
  const handleStart = (event: GestureResponderEvent) => {
    tempX = axisXY.X;
    tempY = axisXY.Y;
  };

  const animate = () => {
    top.stopAnimation();
    left.stopAnimation();
    top.removeAllListeners();
    left.removeAllListeners();
    top.setValue(tempY);
    left.setValue(tempX);
    getAnim().start();
    top.addListener(({value})=> {
        tempY = value;
        console.log(tempY);
    })
    left.addListener(({value}) => {
        tempX = value;
        console.log(tempX);
    })
  };

  const getAnim = (): Animated.CompositeAnimation => {
    switch (direction) {
      case "u":
        return Animated.timing(top, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        });
      case "l":
        return Animated.timing(left, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        });
      case "r":
        return Animated.timing(left, {
          toValue: width - snakeWidth,
          duration: 1500,
          useNativeDriver: false,
        });
      case "d":
        return Animated.timing(top, {
          toValue: height - snakeWidth,
          duration: 3000,
          useNativeDriver: false,
        });
      default:
        return Animated.timing(top, {
          toValue: 0 + snakeWidth,
          duration: 3000,
          useNativeDriver: false,
        });
    }
  };

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    animate();
  }, [direction]);

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={handleSwipe}>
        <View
          style={getSnakeWrapperStyle()}
          onTouchStart={handleStart}
        >
          <Animated.View style={getSnakeStyle(top, left, snakeWidth)} />
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Snake;

/*
  if (tempY > axisXY.Y) {
      console.log("TOP");
    }
    //left
    if (tempX > axisXY.X) {
      console.log("LEFT");
    }
    //right
    if (tempX < axisXY.X) {
      console.log("RIGHT");
    }
    //bottom
    if (tempY < axisXY.Y) {
      console.log("BOTTOM");
    }
*/
