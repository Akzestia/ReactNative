import { Dimensions, StyleProp, ViewStyle, Animated } from "react-native";



const { width, height } = Dimensions.get('screen');

function getSnakeWrapperStyle() : StyleProp<ViewStyle>{
    return{
        flex: 1,
        backgroundColor: 'transparent',
    }
}

function getSnakeStyle(
    top: number,
    left: number,
    // right: Animated.Value,
    // bottom: Animated.Value,
    size: number
) : StyleProp<ViewStyle>{

    return{
        position: "absolute",
        top: top,
        left: left,
        width: size,
        height: size,
        backgroundColor: 'red',
        borderRadius: 27,
    } 
}



export {
    getSnakeWrapperStyle,
    getSnakeStyle
}