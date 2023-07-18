import axios, { AxiosResponse } from 'axios';
import { IEatenProduct } from 'redux/reducers/dayInfo';


export const instanceAxios = axios.create({
    baseURL: "https://slimmom-backend.goit.global",
});

export interface IUserLoginData {
    email: string,
    password: string,
}
export interface IUserRegisterData extends IUserLoginData {
    username: string
}

//Block Auth

interface IRegisterUserResponse {
    data: {
        email: string,
        username: string,
        id: string,
    }
}

export const registerUser = async (userData: IUserRegisterData) => {
    try {
        const result: IRegisterUserResponse = await instanceAxios.post('/auth/register', userData);

        const { data } = result;

        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }

}

interface ILoginUserResponse {
    accessToken: string,
    refreshToken: string,
    sid: string,
    todaySummary: {
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number,
        userId: string,
        id: string
    },
    user: {
        email: string,
        username: string,
        userData: {
            weight: number,
            height: number,
            age: number,
            bloodType: number,
            desiredWeight: number,
            dailyRate: number,
            notAllowedProducts: string[]
        },
        id: string
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

interface IToken {
    token: string
}

interface IDataRefresh extends IToken {
    sid: string
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
export interface IDailyRateRequest {
    weight: number,
    height: number,
    age: number,
    desiredWeight: number,
    bloodType: number
}

export interface IDailyRateResponse {
    data: {
        dailyRate: number,
        notAllowedProducts: string[]
    }
}

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
export interface IFindProduct extends IToken {
    searchText: string;
}

export interface IProductItem {
    calories: number,
    categories: {
        ru: string,
        uk: string,
        en: string
    },
    groupBloodNotAllowed: [null, boolean, boolean, boolean, boolean],
    title: {
        ua: string,
        ru?: string,
        en: string
    },
    weight: number,
    _id: string
}

export type FindProductResponse = {
    data: IProductItem[]
}

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
export interface IEatenProductRequest {
    date: string;
    productId: string,
    weight: number
}

export interface IEatenProductResponse {
    eatenProduct: {
        title: string,
        weight: number,
        kcal: number,
        id: string
    },
    day: {
        id: string,
        eatenProducts: [
            {
                title: string,
                weight: number,
                kcal: number,
                id: string
            }
        ],
        date: string,
        daySummary: string
    },
    daySummary: {
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number,
        userId: string,
        id: string
    }
}

export const postEatenProduct = async (data: { eatenProduct: IEatenProductRequest, token: string }) => {

    const result: IEatenProductResponse = await instanceAxios.post('/day', data.eatenProduct, {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    })
    return result;
};

export interface IDeleteRequest {
    dayId: string;
    eatenProductId: string;
}
export const deleteEatenProduct = async (data: { requestData: IDeleteRequest, token: string }) => {
    const response = await instanceAxios.delete('/day', {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        data: data.requestData
    });

    return response;
}

export interface IGetDayInfo extends IToken {
    date: string
}

export interface IGetDayInfoResponse {
    id: string,
    eatenProducts: IEatenProduct[],
    date: string,
    daySummary: {
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number,
        userId: string,
        id: string
    }
}

export const getDayInfo = async (data: IGetDayInfo) => {
    const response: IGetDayInfoResponse = await instanceAxios.post('/day/info', {
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


