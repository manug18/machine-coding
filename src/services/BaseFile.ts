
import { axiosInstance } from '../services/AxiosInstance';

export const fetchData = () => {
  return axiosInstance.get('/').then((response) => response);
};


