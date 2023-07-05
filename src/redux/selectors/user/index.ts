import { RootState } from 'redux/store';

export const isAuthSelector = (state: RootState) => state.userState.accessToken;

export const userNameSelector = (state: RootState) => state.userState.user.username;

export const userIdSelector = (state: RootState) => state.userState.user.id;

export const userDataSelector = (state: RootState) => state.userState.user.userData;