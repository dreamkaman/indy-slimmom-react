import axios from 'axios';

interface IUserLoginData {
    email: string;
    password: string;
}
interface IUserRegisterData extends IUserLoginData {
    username: string
}
export const instanceAxios = axios.create({
    baseURL: "https://slimmom-backend.goit.global",
});


//Block Auth
export const registerUser = (userData: IUserRegisterData) => instanceAxios.post('/auth/register', userData);

export const loginUser = (userData: IUserLoginData) => instanceAxios.post('/auth/login', userData);

export const logoutUser = (token: string) => instanceAxios.post('/auth/logout', {}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
interface IToken {
    token: string
}

interface IDataRefresh extends IToken {
    sid: string
}
export const refreshUser = (data: IDataRefresh) => instanceAxios.post('auth/refresh', { sid: data.sid }, {
    headers: {
        Authorization: `Bearer ${data.token}`
    }
});


//Block Daily-rate
interface IDataSearch extends IToken {
    searchText: string;
}
export const findProduct = (data: IDataSearch) => instanceAxios.get('/product', {
    headers: {
        Authorization: `Bearer ${data.token}`
    },
    params:
        { search: data.searchText }
});

//Block Day
interface IEatenProduct {
    date: string;
    productId: string,
    weight: number
}

export const setEatenProduct = (data: { eatenProduct: IEatenProduct, token: string }) => instanceAxios.post('/day', data.eatenProduct, {
    headers: {
        Authorization: `Bearer ${data.token}`
    }
});

interface IDeleteRequest {
    dayId: string;
    eatenProductId: string;
}
export const deleteEatenProduct = (data: { requestData: IDeleteRequest, token: string }) => instanceAxios.delete('/day', {
    headers: {
        Authorization: `Bearer ${data.token}`
    },
    data: {
        body: data.requestData,
    }
});

interface IGetDayInfo extends IToken {
    date: string
}
export const getDayInfo = (data: IGetDayInfo) => instanceAxios.post('/day/info', {
    date: data.date
}, {
    headers: {
        Authorization: `Bearer ${data.token}`
    }
})

//Block User
export const getUser = (token: string) => instanceAxios.get('/user', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

