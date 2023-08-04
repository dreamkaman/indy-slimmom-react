import { createReducer } from '@reduxjs/toolkit';

import { SHOW_BURGER_MENU } from 'redux/actions/burgerMenu/actionType';

export interface IBurgerMenuState {
    showBurgerMenu: boolean,
}
const initialState: IBurgerMenuState = {
    showBurgerMenu: false,
};
export const BurgerMenuReducer = createReducer(initialState, {
    [SHOW_BURGER_MENU]: (state, _action) => {
        return {
            ...state,
            showBurgerMenu: !state.showBurgerMenu,
        }
    }
});