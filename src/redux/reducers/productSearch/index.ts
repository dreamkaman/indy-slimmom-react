import { createReducer } from '@reduxjs/toolkit';
import { IProductItem } from 'API';

import * as productSearchTypes from 'redux/actions/productSearch/actionTypes';

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
    }
})