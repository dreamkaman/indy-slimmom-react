import { RootState } from "redux/store";

export const getEatenProduct = (state: RootState) => state.searchState.filteredProducts[0];