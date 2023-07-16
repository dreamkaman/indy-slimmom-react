import { createAction } from "@reduxjs/toolkit";

import { POST_EATEN_PRODUCT } from './actionTypes';
import { IEatenProductRequest } from "API";


export const postEatenProductAction = createAction<{ eatenProduct: IEatenProductRequest, token: string }, 'POST_EATEN_PRODUCT'>(POST_EATEN_PRODUCT);