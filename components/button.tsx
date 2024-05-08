import React from 'react';
import { View, SafeAreaView } from 'react-native';

const ButtonX : React.FC<{}> = () => {

	return(
		<SafeAreaView>
			<View style={{	
				position: 'absolute',
				bottom: 10,
				marginBottom: 200,
				alignSelf: 'center',
				backgroundColor: 'black',
				height: 90,
				width: 150
			}}>
			</View>
		</SafeAreaView>
	)
}


export default ButtonX;








