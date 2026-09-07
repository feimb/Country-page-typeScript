import axios from "axios";

const api = axios.create({
    baseURL: "https://api.restcountries.com/countries/v5",
});

api.defaults.headers.common = {
    "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}` 
}

export default api;