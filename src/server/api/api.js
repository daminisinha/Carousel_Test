import axios from 'axios'
import {API_URL,API_KEY,API_KEYWORD,API_TYPE} from '../apiConfig/config'

//Axios call to get images
export const getImages = function () {
    return axios.get(`${API_URL}?key=${API_KEY}&q=${API_KEYWORD}&image_type=${API_TYPE}`)
        .then((results) => {
            return results.data.hits;
        })
        .catch((err) => {
            return new Error(err)
        })
}
