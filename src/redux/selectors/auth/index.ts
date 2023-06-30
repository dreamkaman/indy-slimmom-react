import { RootState } from 'redux/store';

export const isAuthSelector = (state: RootState) => state.userReducer.accessToken;