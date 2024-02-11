import { combineReducers } from 'redux';

import { userReducer } from './user';
import { modalReducer } from './modal';
import { productSearchReducer } from './productSearch';
import { dayInfoReducer } from './dayInfo';
import { BurgerMenuReducer } from './burgerMenu';

export const rootReducer = combineReducers({
  userState: userReducer,
  modalState: modalReducer,
  searchState: productSearchReducer,
  dayInfoState: dayInfoReducer,
  BurgerMenuState: BurgerMenuReducer
});

