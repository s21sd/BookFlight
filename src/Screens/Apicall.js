import axios from "react-native-axios"
const locationEndPoints = params => `https://booking-com15.p.rapidapi.com/api/v1/flights/${params.searchName}`

const apicall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error', err);
        return null;

    }
}



export const fetchLoactions = params => {
    return apicall(locationEndPoints(params));
}