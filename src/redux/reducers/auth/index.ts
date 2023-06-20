import { createReducer } from '@reduxjs/toolkit';

interface IAuthState {
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

    const initialState: IAuthState = {
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

    }

// const userReducer = createReducer({});