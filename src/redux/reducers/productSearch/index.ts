import { createReducer } from '@reduxjs/toolkit';

import * as productSearchTypes from 'redux/actions/productSearch/actionTypes';

export interface IProductSearchState {
    filteredProducts: string[]
}

const initialState: IProductSearchState = {
    filteredProducts: []
}

export const productSearchReducer = createReducer(initialState, {
    [productSearchTypes.FIND_PRODUCT]: (state, _action) => {

        return { ...state }
    }
})