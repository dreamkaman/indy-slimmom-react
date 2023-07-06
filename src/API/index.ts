import axios, { AxiosResponse } from 'axios';


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
    weight: string,
    height: string,
    age: string,
    desiredWeight: string,
    bloodType: string
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

        console.log('Response - ', data);

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
interface IDataSearch extends IToken {
    searchText: string;
}
export const findProduct = async (data: IDataSearch) => {
    try {
        const result = await instanceAxios.get('/product', {
            headers: {
                Authorization: `Bearer ${data.token}`
            },
            params:
                { search: data.searchText }
        });

        return result;
    } catch (error) {
        throw new Error(error.message);
    }

}

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
export const getUserInfo = (token: string) => instanceAxios.get('/user', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});


