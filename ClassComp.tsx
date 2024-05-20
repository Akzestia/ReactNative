import React from 'react';
import { Text, View } from 'react-native';  

class ClassComp extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return <Text style={{
			alignSelf: 'center',
			top: '48%',
			fontSize: 30
		}}>{this.props.name}</Text>
	}
}



export default ClassComp;
