import { combineReducers } from 'redux';

import { userReducer } from './user';
import { modalReducer } from './modal';
import { productSearchReducer } from './productSearch';

export const rootReducer = combineReducers({
  userState: userReducer,
  modalState: modalReducer,
  searchState: productSearchReducer
});

