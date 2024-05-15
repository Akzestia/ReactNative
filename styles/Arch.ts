
import { ImageStyle, StyleProp, ViewStyle, Animated } from "react-native";

function getArchImage(ScaleX: Animated.Value, ScaleY: Animated.Value, left: number): StyleProp<ImageStyle> {

    return {
        position: 'absolute',
        width: 200,
        height: 200,
        transform: [{ scaleX: ScaleX }, { scaleY: ScaleY }],
        backgroundColor: "transparent",
        paddingLeft: 30,
        left: left
    }
}


function getArchView(left: Animated.Value) : StyleProp<ViewStyle>{
    return{
        width: 200,
        height: 200,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        left: left
    }
}

function getArchFlame(top: Animated.Value, width: Animated.Value,
    height: Animated.Value) : StyleProp<ViewStyle>{
    return{
        position: 'absolute',
        top: top,//325
        width: 1,//120
        height: 1,//200
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "aqua",
        transform: [{scaleX: width}, {scaleY: height}],
    }
}

export {
    getArchImage,
    getArchView,
    getArchFlame
};