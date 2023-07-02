import { createAction } from "@reduxjs/toolkit";

import { IFormData } from 'components/LoginUserForm/LoginUserForm';
import { IUserState } from 'redux/reducers/user';

import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    GET_USER_INFO,
    LOGIN_USER_SUCCEEDED,
    LOGOUT_USER_SUCCEEDED,
    POST_USER_DAILY_RATE,
    POST_USER_DAILY_RATE_SUCCEEDED
} from './actionTypes';

import { IDailyRateRequest, IUserRegisterData } from 'API';

export const registerUserAction = createAction<IUserRegisterData, 'REGISTER_USER'>(REGISTER_USER);

export const loginUserAction = createAction<IFormData, 'LOGIN_USER'>(LOGIN_USER);

export const loginUserSucceededAction = createAction<IUserState, 'LOGIN_USER_SUCCEEDED'>(LOGIN_USER_SUCCEEDED);

export const logoutUserAction = createAction<string, 'LOGOUT_USER'>(LOGOUT_USER);

export const logOutUserSucceededAction = createAction<string, 'LOGOUT_USER_SUCCEEDED'>(LOGOUT_USER_SUCCEEDED)

export const getUserInfoAction = createAction<string, 'GET_USER_INFO'>(GET_USER_INFO);

export const postUserDailyRate = createAction<{ request: IDailyRateRequest, userId: string, token: string }, 'POST_USER_DAILY_RATE'>(POST_USER_DAILY_RATE);

export const postUserDailyRateSucceededAction = createAction<{ request: IDailyRateRequest, userId: string }>(POST_USER_DAILY_RATE_SUCCEEDED);