import axios from "axios";

const jwt = JSON.parse(localStorage.getItem("jwt"));

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1", 
  timeout: 5000, 
  headers: {
    "Content-Type": "application/json", 
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${jwt?.token} || ''`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
