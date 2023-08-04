import { createReducer } from '@reduxjs/toolkit';

import { SHOW_MODAL } from 'redux/actions/modalWindow/actionTypes';

export interface IModalState {
    showModal: boolean,
}
const initialState: IModalState = {
    showModal: false,
};
export const modalReducer = createReducer(initialState, {
    [SHOW_MODAL]: (state, _action) => {
        return {
            ...state,
            showModal: !state.showModal,
        }
    }
});