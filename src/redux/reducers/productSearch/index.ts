import { createReducer } from '@reduxjs/toolkit';
import { IProductItem } from 'API';

import * as productSearchTypes from 'redux/actions/productSearch/actionTypes';
import { LOGOUT_USER_SUCCEEDED } from 'redux/actions/user/actionTypes';

export interface IProductSearchState {
    filteredProducts: IProductItem[]
}

const initialState: IProductSearchState = {
    filteredProducts: []
}

export const productSearchReducer = createReducer(initialState, {
    [productSearchTypes.FIND_PRODUCT_SUCCEEDED]: (state, action) => {

        return {
            ...state,
            filteredProducts: action.payload
        }
    },
    [LOGOUT_USER_SUCCEEDED]: () => {
        return { ...initialState };
    }
})