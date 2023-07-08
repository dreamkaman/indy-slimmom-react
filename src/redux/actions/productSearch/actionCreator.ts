import { createAction } from "@reduxjs/toolkit";

import { FIND_PRODUCT } from "./actionTypes";
import { IDataSearch } from "API";

export const findProductAction = createAction<IDataSearch, 'FIND_PRODUCT'>(FIND_PRODUCT);