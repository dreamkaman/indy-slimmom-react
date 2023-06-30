import { createAction } from "@reduxjs/toolkit";

import { IFormData } from 'components/LoginUserForm/LoginUserForm';
import { IUserState } from 'redux/reducers/auth';

import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    GET_USER_INFO,
    LOGIN_USER_SUCCEEDED,
    LOGOUT_USER_SUCCEEDED
} from './actionTypes';

import { IUserRegisterData } from 'API';

export const registerUserAction = createAction<IUserRegisterData, 'REGISTER_USER'>(REGISTER_USER);

export const loginUserAction = createAction<IFormData, 'LOGIN_USER'>(LOGIN_USER);

export const loginUserSucceededAction = createAction<IUserState, 'LOGIN_USER_SUCCEEDED'>(LOGIN_USER_SUCCEEDED);

export const logoutUserAction = createAction<string, 'LOGOUT_USER'>(LOGOUT_USER);

export const logOutUserSucceededAction = createAction<string, 'LOGOUT_USER_SUCCEEDED'>(LOGOUT_USER_SUCCEEDED)

export const getUserInfoAction = createAction(GET_USER_INFO);