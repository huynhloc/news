import Axios from 'axios';
import NProgress from 'nprogress';
import toast from 'react-hot-toast';

const REACT_APP_API_URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=884e0de0d10142d79d993d53c16ee24c';


const api = Axios.create({
  baseURL: REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

api.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  async (error) => {
    NProgress.done();
    const errorMsg =
      error.response?.data?.error?.message ||
      error.response?.error?.message ||
      error.message;
    toast.error(errorMsg); 
    return Promise.reject(new Error(errorMsg));
  }
);

export default api;
