import { combineReducers } from 'redux';

import { userReducer } from './user';
import { modalReducer } from './modal';

export const rootReducer = combineReducers({
  userState: userReducer,
  modalState: modalReducer
});

