import api from '../http';
import {AxiosResponse} from 'axios';
import {IUser} from "../models/IUser";
export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return api.get<IUser[]>('/users', config);
    }
}