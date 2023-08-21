import axios, { AxiosResponse } from 'axios';

import {
    FindProductResponse,
    IDailyRateRequest,
    IDailyRateResponse,
    IDataRefresh,
    IDeleteRequest,
    IEatenProductRequest,
    IEatenProductResponse,
    IFindProduct,
    IGetDayInfo,
    IGetDayInfoNewDayResponse,
    IGetDayInfoResponse,
    ILoginUserResponse,
    IRegisterUserResponse,
    IUserLoginData,
    IUserRegisterData
} from 'types';

// import { IEatenProduct } from 'redux/reducers/dayInfo';


export const instanceAxios = axios.create({
    baseURL: "https://slimmom-backend.goit.global",
});



//Block Auth

export const registerUser = async (userData: IUserRegisterData) => {
    try {
        const result: IRegisterUserResponse = await instanceAxios.post('/auth/register', userData);

        const { data } = result;

        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }

}

export const loginUser = async (userData: IUserLoginData) => {
    try {
        const { data }: AxiosResponse<ILoginUserResponse> = await instanceAxios.post('/auth/login', userData);
        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }

}

export const logoutUser = async (token: string) => {
    try {
        const { data } = await instanceAxios.post('/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;

    } catch (error) {
        throw new Error(error.message);
    }

}

export const refreshUser = (data: IDataRefresh) => {
    try {
        instanceAxios.post('auth/refresh', { sid: data.sid }, {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        });
    } catch (error) {
        throw new Error(error.message);
    }

}


//Block Daily-rate

export const getGeneralDailyRate = async (request: IDailyRateRequest) => {
    try {
        const { data }: IDailyRateResponse = await instanceAxios.post('/daily-rate', request);

        return data;
    } catch (error) {
        throw new Error(error.message);
    }

}

export const postUserDailyRate = async (request: IDailyRateRequest, userId: string, token: string) => {
    try {
        const result: IDailyRateResponse = await instanceAxios.post(`/daily-rate/${userId}`, request, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}

//Block Product-search

export const findProduct = async (data: IFindProduct) => {
    const { token, searchText } = data;
    try {
        const { data }: FindProductResponse = await instanceAxios.get('/product', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params:
                { search: searchText }
        });

        return data;
    } catch (error) {
        throw new Error(error.message);
    }

}

//Block Day

export const postEatenProduct = async (data: { eatenProduct: IEatenProductRequest, token: string }) => {

    const result: IEatenProductResponse = await instanceAxios.post('/day', data.eatenProduct, {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    })
    return result;
};

export const deleteEatenProduct = async (data: { requestData: IDeleteRequest, token: string }) => {
    const response = await instanceAxios.delete('/day', {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        data: data.requestData
    });

    return response;
}

export const getDayInfo = async (data: IGetDayInfo) => {
    const response: IGetDayInfoResponse | IGetDayInfoNewDayResponse = await instanceAxios.post('/day/info', {
        date: data.date
    }, {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    })

    return response
}

//Block User
export const getUserInfo = (token: string) => instanceAxios.get('/user', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});


