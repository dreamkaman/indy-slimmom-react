import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    GET_USER_INFO,
    LOGIN_USER,
    LOGOUT_USER,
    POST_USER_DAILY_RATE,
    REGISTER_USER
} from "redux/actions/user/actionTypes";

import {
    IDailyRateRequest,
    IUserLoginData,
    getUserInfo,
    loginUser,
    logoutUser,
    postUserDailyRate
} from 'API';
import {
    getUserInfoAction,
    getUserInfoSucceededACtion,
    logOutUserSucceededAction,
    loginUserSucceededAction,
    postUserDailyRateSucceededAction,
} from 'redux/actions/user/actionCreators';
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

function* postUserDailyRateWorker(action: {
    type: string,
    payload: {
        request: IDailyRateRequest,
        userId: string,
        token: string
    }
}) {
    try {
        const { payload: { request, userId, token } } = action;
        const { data } = yield call(postUserDailyRate, request, userId, token);
        console.log('postUserDailyRateWorker saga');
        console.log(data);
        yield put(postUserDailyRateSucceededAction(data));
        const result = yield put(getUserInfoAction(token));
        console.log('UserData');
        console.log(result);
    } catch (error) {
        showErrorMessage(error.message);
    }
}

function* postUserDailyRateWatcher() {
    yield takeEvery(POST_USER_DAILY_RATE, postUserDailyRateWorker);
}

function* getUserInfoWorker(action: {
    type: string,
    payload: string
}) {
    try {
        const { payload: token } = action;
        console.log('getUserInfoWorker');
        console.log(action);
        const { data: { userData } } = yield call(getUserInfo, token);
        console.log(userData);
        yield put(getUserInfoSucceededACtion(userData));

    } catch (error) {
        showErrorMessage(error.message);
    }
}

function* getUserInfoWatcher() {
    yield takeEvery(GET_USER_INFO, getUserInfoWorker);
}

export default function* rootSaga() {
    yield all([
        fork(registerUserWatcher),
        fork(loginUserWatcher),
        fork(logoutUserWatcher),
        fork(postUserDailyRateWatcher),
        fork(getUserInfoWatcher)
    ]);
}


