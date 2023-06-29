import { all, fork, takeEvery } from 'redux-saga/effects';

import { LOGIN_USER, REGISTER_USER } from "redux/actions/auth/actionTypes";

import { IUserLoginData } from 'API';

function* registerUserWorker() {
    console.log('registerUserWorker works');
    yield;
}

function* registerUserWatcher() {
    yield takeEvery(REGISTER_USER, registerUserWorker);
}
function* loginUserWorker(action: {
    type: string,
    payload: IUserLoginData
}) {
    console.log('email: ', action.payload.email);
    console.log('password: ', action.payload.password);
    yield;
}
function* loginUserWatcher() {
    yield takeEvery(LOGIN_USER, loginUserWorker);
}
export default function* rootSaga() {
    yield all([
        fork(registerUserWatcher),
        fork(loginUserWatcher)

    ]);
}


