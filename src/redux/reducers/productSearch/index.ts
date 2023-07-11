import { createReducer } from '@reduxjs/toolkit';

import * as productSearchTypes from 'redux/actions/productSearch/actionTypes';

export interface IProductSearchState {
    filteredProducts: string[]
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
    }
})