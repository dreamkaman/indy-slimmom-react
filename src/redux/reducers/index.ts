import { combineReducers } from 'redux';

import { userReducer } from './user';

// const test = (state = {}, action) => {
//   console.log(action); //only for Eslint avoiding
//   return state;
// };

export const rootReducer = combineReducers({
  userReducer
});

