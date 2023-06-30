import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "redux/actions/auth/actionTypes";

import { IUserLoginData, loginUser, logoutUser } from 'API';
import { logOutUserSucceededAction, loginUserSucceededAction } from 'redux/actions/auth/actionCreators';
import { showErrorMessage } from 'shared/tools/showMessages';

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
    try {
        const { payload } = action;
        const response = yield call(loginUser, payload);
        yield put(loginUserSucceededAction(response));
    } catch (error) {
        showErrorMessage(error.message);
    }


}

function* loginUserWatcher() {
    yield takeEvery(LOGIN_USER, loginUserWorker);
}

// function* loginUserSucceededWorker() {

// }

// function* loginUserSucceededWatcher() {
//     yield takeEvery(LOGIN_USER_SUCCEEDED, loginUserSucceededWorker);
// }

function* logoutUserWatcher() {
    yield takeEvery(LOGOUT_USER, logoutUserWorker);
}

function* logoutUserWorker(action: {
    type: string,
    payload: string
}) {
    try {
        const { payload } = action;

        const response = yield call(logoutUser, payload);

        console.log(response);

        yield put(logOutUserSucceededAction());
    } catch (error) {
        showErrorMessage(error.message);
    }

}

export default function* rootSaga() {
    yield all([
        fork(registerUserWatcher),
        fork(loginUserWatcher),
        // fork(loginUserSucceededWatcher)
        fork(logoutUserWatcher)

    ]);
}


