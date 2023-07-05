import { createReducer } from '@reduxjs/toolkit';

import * as modalActionTypes from 'redux/actions/modal/actionTypes';

export interface IModalState {
    showModal: boolean,
}
const initialState: IModalState = {
    showModal: false,
};
export const modalReducer = createReducer(initialState, {
    [modalActionTypes.SHOW_MODAL]: (state, _action) => {
        return {
            ...state,
            showModal: !state.showModal,
        }
    }
});