import { RootState } from 'redux/store';

export const isAuthSelector = (state: RootState) => state.userReducer.accessToken;

export const userNameSelector = (state: RootState) => state.userReducer.user.username;

export const userIdSelector = (state: RootState) => state.userReducer.user.id;