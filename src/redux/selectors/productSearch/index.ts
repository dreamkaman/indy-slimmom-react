import { RootState } from "redux/store"

export const filteredProductsSelector = (state: RootState) => state.searchState.filteredProducts;