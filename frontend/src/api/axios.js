import axios from "axios";

const instance = axios.create({
    //baseURL: 'https://apiproductos-0w34.onrender.com/api',
    //baseURL: 'http://localhost:4000/api',
    baseURL: 'https://apileblanc.onrender.com/api',
    withCredentials: true,
    headers:{
        Accept: 'application/json'
    }
});

export default instance;