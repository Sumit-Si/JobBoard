import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsearch.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance
