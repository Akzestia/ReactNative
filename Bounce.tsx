import React, { useEffect } from 'react';

import { Animated, View, Text } from 'react-native'
import { getBounceBoxStyle }  from './styles/Bounce';

const Bounce : React.FC<{}> = () => {
	const animatedWidth = new Animated.Value(0);
	const animatedHeight = new Animated.Value(0);
	
	useEffect(() => alert('hello'), []);

	return(
		<View style={[getBounceBoxStyle()]}>
		</View>
	)
}


export default Bounce;
