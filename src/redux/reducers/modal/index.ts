import { createReducer } from '@reduxjs/toolkit';

import { SHOW_MODAL } from 'redux/actions/modalWindow/actionTypes';
import { LOGOUT_USER_SUCCEEDED } from 'redux/actions/user/actionTypes';

import { IModalState } from 'types';

const initialState: IModalState = {
    showModal: false,
};
export const modalReducer = createReducer(initialState, {
    [SHOW_MODAL]: (state, _action) => {
        return {
            ...state,
            showModal: !state.showModal,
        }
    },
    [LOGOUT_USER_SUCCEEDED]: () => {
        return { ...initialState };
    },
});