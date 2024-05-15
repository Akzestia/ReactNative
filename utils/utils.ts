import 'react-native-get-random-values'
import * as FileSystem from 'expo-file-system';
import { v4 as uuid } from 'uuid';


const downloadFile = async (url: string) => {
    try{
        const filename = `${uuid()}.jpg`;
        const { uri: localUri } = await FileSystem.downloadAsync(url, FileSystem.documentDirectory + filename);
        console.log('File downloaded successfully:', localUri);
    	alert('succesfully downloaded!');
    }
    catch(Error){
	    alert('failed to download.');
        console.log(Error);
    }
 
};

export default  downloadFile;
