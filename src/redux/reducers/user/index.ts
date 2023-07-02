import { createReducer } from '@reduxjs/toolkit';

import * as userActionTypes from 'redux/actions/user/actionTypes';

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
    [userActionTypes.LOGIN_USER_SUCCEEDED]: (state, action) => {
        console.log('Reducer');
        console.log(action);
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
    [userActionTypes.LOGOUT_USER_SUCCEEDED]: (_state, action) => {
        console.log('LOGIN_USER_SUCCEEDED');
        console.log(action);
        return { ...initialState };
    },
    [userActionTypes.POST_USER_DAILY_RATE_SUCCEEDED]: (state, action) => {
        const { payload } = action;
        console.log('POST_USER_DAILY_RATE_SUCCEEDED');
        console.log(action);
        return {
            ...state,
            user: {
                ...state.user,
                userData: {
                    ...state.user.userData,
                    dailyRate: payload.dailyRate,
                    notAllowedProducts: [...payload.notAllowedProducts]
                }
            }
        }
    },
    // [userActionTypes.GET_USER_INFO]: (state, action) => {
    //     console.log('GET_USER_INFO');
    //     console.log(state);
    //     console.log(action);
    //     return { ...state }
    // },
    [userActionTypes.GET_USER_INFO_SUCCEEDED]: (state, action) => {
        console.log('GET_USER_INFO_SUCCEEDED');
        console.log(action);
        return {
            ...state,
            user: {
                ...state.user,
                userData: {
                    ...action.payload,
                }
            }
        }
    }
}
);