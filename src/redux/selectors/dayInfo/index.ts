import { RootState } from "redux/store";

export const getEatenProductSelector = (state: RootState) => state.searchState.filteredProducts[0];

export const getEatenProductListSelector = (state: RootState) => state.dayInfoState.eatenProducts;

export const getDaySummerySelector = (state: RootState) => state.dayInfoState.daySummary;