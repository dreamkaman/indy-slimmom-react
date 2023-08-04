import { createAction } from "@reduxjs/toolkit";

import { SHOW_BURGER_MENU } from "./actionType";

export const showBurgerMenuAction = createAction<'SHOW_BURGER_MENU'>(SHOW_BURGER_MENU);