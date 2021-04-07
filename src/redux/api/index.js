import axios from "axios";

const baseURL = ' http://www.omdbapi.com/?apikey=eccd2e53';

export const apiCall = (url,data,haeder,method)=>axios({
    method,
    url:baseURL+url,
    data,
    haeder
})
