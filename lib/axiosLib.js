import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

export default axiosInstance;
