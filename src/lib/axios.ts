import { useAuthStore } from "@/store/authStore";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.VITE_REACT_APP_API_BASE_URL,
  timeout: 0,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    try {
      const accessToken = useAuthStore.getState().accessToken;

      if (accessToken) {
        config.headers.setAuthorization(`Bearer ${accessToken}`);
      }
      return config;
    } catch (error: any) {
      throw new Error(error);
    }
  },
  (error: any) => Promise.reject(error)
);

export default axiosInstance;
