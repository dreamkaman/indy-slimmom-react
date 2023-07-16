import { createAction } from "@reduxjs/toolkit";

import {
    POST_EATEN_PRODUCT,
    POST_EATEN_PRODUCT_SUCCEEDED
} from './actionTypes';
import { IEatenProductRequest, IEatenProductResponse } from "API";


export const postEatenProductAction = createAction<{ eatenProduct: IEatenProductRequest, token: string }, 'POST_EATEN_PRODUCT'>(POST_EATEN_PRODUCT);

export const postEatenProductSucceededAction = createAction<IEatenProductResponse, 'POST_EATEN_PRODUCT_SUCCEEDED'>(POST_EATEN_PRODUCT_SUCCEEDED);