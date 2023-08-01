import { createReducer } from '@reduxjs/toolkit';

import {
    GET_USER_DAILY_RATE_SUCCEEDED,
    GET_USER_INFO_SUCCEEDED,
    LOGIN_USER_SUCCEEDED,
    LOGOUT_USER_SUCCEEDED,
    POST_USER_DAILY_RATE_SUCCEEDED
} from 'redux/actions/user/actionTypes';

export interface IUserState {
    accessToken: string,
    refreshToken: string,
    sid: string,
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
        id: string,
    }
}

export const initialState: IUserState = {
    accessToken: '',
    refreshToken: '',
    sid: '',
    user: {
        email: '',
        username: '',
        userData: {
            weight: 0,
            height: 0,
            age: 0,
            bloodType: 0,
            desiredWeight: 0,
            dailyRate: 0,
            notAllowedProducts: []
        },
        id: '',
    },

};

export const userReducer = createReducer(initialState, {
    [LOGIN_USER_SUCCEEDED]: (state, action) => {
        return {
            ...state,
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken,
            sid: action.payload.sid,
            user: {
                ...state.user,
                email: action.payload.user.email,
                username: action.payload.user.username,
                userData: action.payload.user.userData,
                id: action.payload.user.id
            }
        }
    },
    [LOGOUT_USER_SUCCEEDED]: () => {
        return { ...initialState };
    },
    [POST_USER_DAILY_RATE_SUCCEEDED]: (state, action) => {
        const { payload } = action;

        return {
            ...state,
            user: {
                ...state.user,
                userData: {
                    ...state.user.userData,
                    dailyRate: payload.request.dailyRate,
                    notAllowedProducts: [...payload.request.notAllowedProducts]
                }
            }
        }
    },
    [GET_USER_INFO_SUCCEEDED]: (state, action) => {
        return {
            ...state,
            user: {
                ...state.user,
                userData: {
                    ...action.payload,
                }
            }
        }
    },
    [GET_USER_DAILY_RATE_SUCCEEDED]: (state, action) => {

        const { payload: {
            dailyRate,
            notAllowedProducts
        } } = action;
        return {
            ...state,
            user: {
                ...state.user,
                userData: {
                    ...state.user.userData,
                    dailyRate,
                    notAllowedProducts
                }
            }
        }
    }
}
);