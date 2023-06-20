import { createAction } from "@reduxjs/toolkit";

import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    GET_USER_INFO
} from './actionTypes';

import { IUserRegisterData } from 'API';

export const registerUserAction = createAction<IUserRegisterData, 'REGISTER_USER'>(REGISTER_USER);

export const loginUserAction = createAction(LOGIN_USER);

export const logoutUserAction = createAction(LOGOUT_USER);

export const getUserInfoAction = createAction(GET_USER_INFO);