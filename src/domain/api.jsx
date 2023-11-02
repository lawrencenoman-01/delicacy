import axios from "axios";

export const callAPI = async({endpoint, method, headers, params, data}) => {
    try {
        const baseURL = 'https://www.themealdb.com/api/json/v1/1'
        const options = await axios({
            baseURL,
            url: endpoint,
            method,
            headers,
            params,
            data,
        })
        
        return options?.data
    } catch (err) {
        console.log('Data Error', err);
    }
}