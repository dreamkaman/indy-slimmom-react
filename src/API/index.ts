import axios from 'axios';

export const instanceAxios = axios.create({
    baseURL: "https://slimmom-backend.goit.global",
});

export const getProducts = () => instanceAxios.get('/product', {
    params:
        { search: '' }
});

interface IUserLoginData {
    email: string;
    password: string;
}
interface IUserRegisterData extends IUserLoginData {
    username: string
}
export const registerUser = (userData: IUserRegisterData) => instanceAxios.post('/auth/register', userData);

export const loginUser = (userData: IUserLoginData) => instanceAxios.post('/auth/login', userData);