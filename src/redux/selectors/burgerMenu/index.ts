import { RootState } from "redux/store";

export const getShowBurgerMenuSelector = (state: RootState) => state.BurgerMenuState.showBurgerMenu;