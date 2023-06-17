import axios, { AxiosResponse } from 'axios';


export const instanceAxios = axios.create({
    baseURL: "https://slimmom-backend.goit.global",
});

interface IUserLoginData {
    email: string,
    password: string,
}
interface IUserRegisterData extends IUserLoginData {
    username: string
}

//Block Auth

interface IRegisterUserRes {
    data: {
        email: string,
        username: string,
        id: string,
    },
    status: number,
    config: object,
    statusText: string,
    headers: any
}

export const registerUser = async (userData: IUserRegisterData): Promise<AxiosResponse<IRegisterUserRes>> => {
    try {
        const result: AxiosResponse<IRegisterUserRes> = await instanceAxios.post('/auth/register', userData);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

}

interface ILoginUserRes {
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
        const { data }: AxiosResponse<ILoginUserRes> = await instanceAxios.post('/auth/login', userData);
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

}

// interface ILogoutUserRes =

export const logoutUser = async (token: string) => {
    try {
        const { data } = await instanceAxios.post('/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }

}

interface IToken {
    token: string
}

interface IDataRefresh extends IToken {
    sid: string
}
export const refreshUser = (data: IDataRefresh) => {
    instanceAxios.post('auth/refresh', { sid: data.sid }, {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    });
}


//Block Daily-rate
interface IDataSearch extends IToken {
    searchText: string;
}
export const findProduct = async (data: IDataSearch) => {
    const result = await instanceAxios.get('/product', {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        params:
            { search: data.searchText }
    });

    return result;
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
export const getUser = (token: string) => instanceAxios.get('/user', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});


