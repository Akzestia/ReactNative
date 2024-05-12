import AnimatedStyle from "../types/AnimatedStyles"
import { Animated, ImageStyle, StyleProp, ViewStyle } from 'react-native';

function getWallpaperStyle(props: AnimatedStyle) : StyleProp<ViewStyle> {
    const { width, height, offsetX, offsetY, index } = props; 
    return {
        position: "absolute",
        backgroundColor: "transparent",
        width: width,
        height: height,
        marginTop: offsetY,
        marginLeft: offsetX,
        borderRadius: 1000000,
        elevation: index,
        zIndex: index,
        overflow: "hidden",
        justifyContent: 'center'
    }
}

function getImageStyle(widthD: number, heightD: number, top?: number, left?: number) : StyleProp<ImageStyle> {
    return {
        position: 'absolute',
        top: top ? top : 400,
        left: left ? left: 400,
        right: 0,
        bottom: 0,
        width: widthD,
        height: heightD,
        backgroundColor: "transparent",
        resizeMode: "cover",
        alignSelf: "center",
    }
}

export {
    getWallpaperStyle,
    getImageStyle
}