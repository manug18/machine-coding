import axios from 'axios';
import {getBaseUrl} from '../AppSettings'

const AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

export default AxiosInstance;


const apiUrl = 'https://api.npoint.io/ca180e840b481675d500';

 export const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json', // Set content type if neededx
  },
});

