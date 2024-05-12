import React from "react";
import axios from "axios";
import NasaApodResponse from "../types/NasaResponse";

export default function useNasa(){
    const baseUrl = "https://api.nasa.gov/planetary/apod";

    const [responseNasa, setResponse] = React.useState<NasaApodResponse | null>(null);

    const getResponseImage = async (date: string) => {
        
        const datex = date.replaceAll('/', '-').split('-');
        
        const options = {
            params:  {
                api_key: 'uGb1QXpqgLmIMf2MdYkvyZxkUr6TyHILcSqDXP86',
                date: datex[2] + '-' + datex[0] + '-' + datex[1]
            }
        }
        try{
            const response : NasaApodResponse = (await axios.get(baseUrl,options)).data;
            if(response) setResponse(response as NasaApodResponse);
            return { uri: response.url, type: response.media_type};
        }
        catch(Error){
            console.log(Error);
        }
        
    }

    return { setResponse, responseNasa, getResponseImage }
}