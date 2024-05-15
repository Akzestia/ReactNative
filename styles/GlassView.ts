
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

function getGlassView(width: number, height: number): StyleProp<ViewStyle> {
    return {
        position: 'absolute',
        top: 90,
        left: 20,
        width: width - 40,
        height: height - 180,
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
        overflow: 'hidden',
        backgroundColor: 'transparent',
    }
}

export {
    getGlassView,
    getGlassImage
}

function longestValidParentheses(s: string): number {
    let longest = 0;
    let current = 0;
    let left = 0;
    let started = false;
    let ended = false;

    var stack : string[] = [];
    while (left < s.length) {
        
        if(s[left] === '('){
            stack.pop();
            stack.push('(');
        }

        if(s[left] === ')' && stack.pop() === '(')

        left++;
    }
    current++;
    if(longest < current) longest = current

    return longest
}
