import axios from "axios"
export const Axios = axios.create({
    baseURL : "https://folksdev-url-shortener.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
})

export const AxiosGet = (url,data) => Axios.get(url,data);
export const AxiosPost = (url,data) => Axios.post(url,data);