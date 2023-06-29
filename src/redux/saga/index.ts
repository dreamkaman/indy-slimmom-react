import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { LOGIN_USER, REGISTER_USER } from "redux/actions/auth/actionTypes";

import { IUserLoginData, loginUser } from 'API';
import { loginUserSucceeded } from 'redux/actions/auth/actionCreators';
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
        const req = yield call(loginUser, payload);
        yield put(loginUserSucceeded(req));
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

export default function* rootSaga() {
    yield all([
        fork(registerUserWatcher),
        fork(loginUserWatcher),
        // fork(loginUserSucceededWatcher)

    ]);
}


