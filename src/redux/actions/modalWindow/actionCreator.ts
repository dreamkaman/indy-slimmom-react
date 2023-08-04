import { createAction } from "@reduxjs/toolkit";

import { SHOW_MODAL } from './actionTypes';

export const showModalAction = createAction(SHOW_MODAL);