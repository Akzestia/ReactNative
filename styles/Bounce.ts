import { Dimensions, StyleProp, ViewStyle } from 'react-native';

const { width, height } = Dimensions.get('screen');


function getBounceBoxStyle() : StyleProp<ViewStyle> {

	return {
		alignSelf: 'center',
		marginTop: height * .5 - 80,
		width: 80,
		height: 80,
		backgroundColor: 'magenta'

	}
}


export {
	getBounceBoxStyle
}
