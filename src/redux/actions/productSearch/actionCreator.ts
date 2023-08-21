import { createAction } from "@reduxjs/toolkit";

import {
    FIND_PRODUCT,
    FIND_PRODUCT_SUCCEEDED
} from "./actionTypes";

import {
    FindProductResponse,
    IFindProduct
} from "types";


export const findProductAction = createAction<IFindProduct, 'FIND_PRODUCT'>(FIND_PRODUCT);

export const findProductSucceededAction = createAction<FindProductResponse, 'FIND_PRODUCT_SUCCEEDED'>(FIND_PRODUCT_SUCCEEDED);