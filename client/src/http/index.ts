import axios, {AxiosHeaders} from 'axios';

export const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

// api.defaults.headers.common['Authorization'] =`Bearer ${localStorage.getItem('token')}`;

// api.interceptors.request.use((config)=>{
//     config.headers = new AxiosHeaders({'Authorization':`Bearer ${localStorage.getItem('token')}`});
//     return config;
// });

export default api;