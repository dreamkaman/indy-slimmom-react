import { all, fork, takeEvery } from 'redux-saga/effects';

import { LOGIN_USER } from "redux/actions/auth/actionTypes";

import { IUserLoginData } from 'API';

function loginUserWorker(action: {
    type: string,
    payload: IUserLoginData
}) {
    console.log('email: ', action.payload.email);
    console.log('password: ', action.payload.password);
}
function* loginUserWatcher() {
    yield takeEvery(LOGIN_USER, loginUserWorker);
}
export default function* rootSaga() {
    yield all([
        fork(loginUserWatcher),
    ]);
}


