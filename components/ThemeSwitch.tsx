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
import Arch from '../images/ArchFireLogo-removebg-preview.png'

const widthD = Dimensions.get("screen").width;
const heightD = Dimensions.get("screen").height;

const ThemeSwitch: React.FC<{}> = () => {
  const width = new Animated.Value(0);
  const height = new Animated.Value(0);
  const offsetX = new Animated.Value(12);
  const offsetY = new Animated.Value(38);

  const wallps = useWallp();
  const [currentWallp, setCurrentWalp] = React.useState(undefined);
  const [nextWallp, setNextWalp] = React.useState(undefined);
  const [wallpIndex, setWallpIndex] = React.useState<number>(0);
  const [anim, setAnim] = React.useState<boolean>(true);

  const animate = () => {
    Animated.parallel([
      Animated.timing(width, {
        toValue: 1500,
        duration: 1750,
        useNativeDriver: false,
      }),
      Animated.timing(height, {
        toValue: 1500,
        duration: 1600,
        useNativeDriver: false,
      }),
      Animated.timing(offsetX, {
        toValue: -400,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(offsetY, {
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
    width.setValue(0);
    height.setValue(0);
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
          width: width,
          height: height,
          offsetX: offsetX,
          offsetY: offsetY,
          index: 2,
        })}
      >
        <Image
          style={getImageStyle(widthD, heightD)}
          source={nextWallp}
        ></Image>
      </Animated.View>
      <View
        style={{
          position: "absolute",
          marginTop: 38,
          marginLeft: 12,
          width: 40,
          height: 40,
          backgroundColor: "transparent",
          borderRadius: 50,
	  borderWidth: 0,
          zIndex: 3,
          elevation: 3,
        }}
      >
      	<Image onTouchStart={() => handleThemeSwitch()}  source={Arch} style={{
		position: 'relative',
		width: 40, 
		height: 40,
		backgroundColor: 'transparent'
	}}>
		
	</Image>
      </View>
    </View>
  );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
  WallapperContainer: {},
});
