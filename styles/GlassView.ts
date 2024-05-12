
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

function getGlassView(width: number, height: number) : StyleProp<ViewStyle> {
    return {
        position: 'absolute',
        top: 100,
        left: 25,
        width: width - 50,
        height: height - 200,
        borderRadius: 9,
        overflow: "hidden",
        backgroundColor: 'transparent',
        elevation: 5,
        zIndex: 5,
    }
}
function getGlassImage(width: number, height: number) {
    return {
        position: 'absolute',
        top: 100,
        left: 25,
        width: width - 50,
        height: height - 200,
        borderRadius: 9,
        overflow: "hidden",
        backgroundColor: 'red',
    }
}

export {
    getGlassView,
    getGlassImage
}