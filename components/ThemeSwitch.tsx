import React, { useEffect } from "react";
import {
  Animated,
  View,
  Image,
  Dimensions,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { getImageStyle, getWallpaperStyle } from "../styles/Wallpaper";
import useWallp from "../hooks/useWallp";
import miku from '../images/wallp1.jpg'

const widthD = Dimensions.get("screen").width;
const heightD = Dimensions.get("screen").height;

const ThemeSwitch: React.FC<{}> = () => {
  const width1st = new Animated.Value(0);
  const height1st = new Animated.Value(0);
  const offsetX1st = new Animated.Value(12);
  const offsetY1st = new Animated.Value(38);

  const wallps = useWallp();
  const [currentWallp, setCurrentWalp] = React.useState(undefined);
  const [nextWallp, setNextWalp] = React.useState(undefined);
  const [wallpIndex, setWallpIndex] = React.useState<number>(0);
  const [anim, setAnim] = React.useState<boolean>(true);

  const animate = () => {
    Animated.parallel([
      Animated.timing(width1st, {
        toValue: 1500,
        duration: 1750,
        useNativeDriver: false,
      }),
      Animated.timing(height1st, {
        toValue: 1500,
        duration: 1600,
        useNativeDriver: false,
      }),
      Animated.timing(offsetX1st, {
        toValue: -400,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(offsetY1st, {
        toValue: -400,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start(() => {
      console.log("ended w1");
      setWallpIndex(wallpIndex + 1);
    });
  };

  useEffect(() => {
    setCurrentWalp(wallps.Default());
    setNextWalp(wallps.Next(wallpIndex))
  }, []);

  useEffect(() => {
    if(wallpIndex > wallps.Size()-1){
      setCurrentWalp(nextWallp);
      setWallpIndex(0);
    }
    else{
      setCurrentWalp(nextWallp);
    }
    console.log(wallpIndex);
   
  }, [wallpIndex]);

  useEffect(() => {
    width1st.setValue(0);
    height1st.setValue(0);
    console.log('next = ' + wallpIndex)
    setNextWalp(wallps.Next(wallpIndex));
  }, [currentWallp]);
  const handleThemeSwitch = () => {
    console.log("clicked");
    animate();
  };
  return (
    <View>
        <Image
          style={getImageStyle(widthD, heightD, -0.01, -0.01)}
          source={currentWallp ? currentWallp : miku}
        ></Image>
      <Animated.View
        style={getWallpaperStyle({
          width: width1st,
          height: height1st,
          offsetX: offsetX1st,
          offsetY: offsetY1st,
          index: 2,
        })}
      >
        <Image
          style={getImageStyle(widthD, heightD)}
          source={nextWallp}
        ></Image>
      </Animated.View>
      <View
        onTouchStart={() => handleThemeSwitch()}
        style={{
          position: "absolute",
          marginTop: 38,
          marginLeft: 12,
          width: 40,
          height: 40,
          backgroundColor: "magenta",
          borderRadius: 50,
          zIndex: 3,
          elevation: 3,
        }}
      ></View>
    </View>
  );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
  WallapperContainer: {},
});
