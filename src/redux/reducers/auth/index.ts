// import { createReducer } from '@reduxjs/toolkit';

// import * as userActionTypes from 'redux/actions/auth/actionTypes';

interface IUserState {
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

// const userReducer = createReducer(initialState, {
//     [userActionTypes.LOGIN_USER]: (state, action) => {
//         return {
//             ...state,
//             accessToken: action.payload.accessToken,
//             refreshToken: action.payload.refreshToken,
//             sid: action.payload.sid,
//             user: {
//                 ...state.user,
//                 email: action.payload.user.email,
//                 username: '',
//                 userData: {
//                 }
//             }
//         }
//     }
// }
// );