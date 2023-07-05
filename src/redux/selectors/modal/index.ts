import { RootState } from "redux/store";

export const showModalSelector = (state: RootState) => state.modalState.showModal;