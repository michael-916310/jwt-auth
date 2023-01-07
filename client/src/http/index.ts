import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

api.interceptors.response.use((
    config)=>config,
    async (error) => {
        const originalConfig = error.config;
        if (error.response.status == 401 && error.config && !error.config._isRetry) {
            try {
                const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
                localStorage.setItem('token', response.data.accessToken);
                return api.request({...originalConfig,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                    _isRetry: true,
                });
            } catch (e) {
                console.log('Not Authorized', e);
            }
        }
        throw error;
    }
)
export default api;