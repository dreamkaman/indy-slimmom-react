import { createAction } from "@reduxjs/toolkit";

import {
    POST_EATEN_PRODUCT,
    POST_EATEN_PRODUCT_SUCCEEDED,
    GET_DAY_INFO,
    GET_DAY_INFO_SUCCEEDED
} from './actionTypes';
import {
    IEatenProductRequest,
    IEatenProductResponse,
    IGetDayInfo,
    IGetDayInfoResponse
} from "API";


export const postEatenProductAction = createAction<{ eatenProduct: IEatenProductRequest, token: string }, 'POST_EATEN_PRODUCT'>(POST_EATEN_PRODUCT);

export const postEatenProductSucceededAction = createAction<IEatenProductResponse, 'POST_EATEN_PRODUCT_SUCCEEDED'>(POST_EATEN_PRODUCT_SUCCEEDED);

export const getDayInfoAction = createAction<IGetDayInfo, 'GET_DAY_INFO'>(GET_DAY_INFO);

export const getDayInfoSucceededAction = createAction<IGetDayInfoResponse, 'GET_DAY_INFO_SUCCEEDED'>(GET_DAY_INFO_SUCCEEDED);