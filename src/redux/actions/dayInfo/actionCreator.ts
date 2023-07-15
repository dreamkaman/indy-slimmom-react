import { createAction } from "@reduxjs/toolkit";

import { POST_EATEN_PRODUCT } from './actionTypes';
import { IEatenProduct } from "API";


export const postEatenProductAction = createAction<{ eatenProduct: IEatenProduct, token: string }, 'POST_EATEN_PRODUCT'>(POST_EATEN_PRODUCT);