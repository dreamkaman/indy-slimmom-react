import { createAction } from "@reduxjs/toolkit";

import { FIND_PRODUCT } from "./actionTypes";
import { IFindProduct } from "API";

export const findProductAction = createAction<IFindProduct, 'FIND_PRODUCT'>(FIND_PRODUCT);