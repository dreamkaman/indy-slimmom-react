import { combineReducers } from 'redux';

import { userReducer } from './user';
import { modalReducer } from './modal';

// const test = (state = {}, action) => {
//   console.log(action); //only for Eslint avoiding
//   return state;
// };

export const rootReducer = combineReducers({
  userState: userReducer,
  modalState: modalReducer
});

