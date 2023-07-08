import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    GET_USER_DAILY_RATE,
    // GET_USER_DAILY_RATE_SUCCEEDED,
    GET_USER_INFO,
    LOGIN_USER,
    LOGOUT_USER,
    POST_USER_DAILY_RATE,
    REGISTER_USER
} from "redux/actions/user/actionTypes";

import {
    IDailyRateRequest,
    IUserLoginData,
    getGeneralDailyRate,
    getUserInfo,
    loginUser,
    logoutUser,
    postUserDailyRate
} from 'API';
import {
    getUserDailyRateSucceededAction,
    getUserInfoAction,
    getUserInfoSucceededACtion,
    logOutUserSucceededAction,
    loginUserSucceededAction,
    postUserDailyRateSucceededAction,
} from 'redux/actions/user/actionCreators';
import { showMessage } from 'shared/tools/showMessages';
import { showModalAction } from 'redux/actions/modal/actionCreator';

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
        showMessage(error.message);
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

        yield call(logoutUser, payload);

        yield put(logOutUserSucceededAction());
    } catch (error) {
        showMessage(error.message);
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
        yield put(postUserDailyRateSucceededAction(data));
        yield put(getUserInfoAction(token));

    } catch (error) {
        showMessage(error.message);
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
        const { data: { userData } } = yield call(getUserInfo, token);
        yield put(getUserInfoSucceededACtion(userData));

    } catch (error) {
        showMessage(error.message);
    }
}

function* getUserInfoWatcher() {
    yield takeEvery(GET_USER_INFO, getUserInfoWorker);
}

function* getUserDailyRateWorker(action: {
    type: string,
    payload: IDailyRateRequest
}) {
    try {
        const { payload } = action;
        const userDailyRate = yield call(getGeneralDailyRate, payload);
        yield put(getUserDailyRateSucceededAction(userDailyRate));
        yield put(showModalAction());
    } catch (error) {
        showMessage(error.message);
    }
}

function* getUserDailyRateWatcher() {
    yield takeEvery(GET_USER_DAILY_RATE, getUserDailyRateWorker);
}

// function* getUserDailyRateSucceededWorker() {
//     yield;
// }

// function* getUserDailyRateSucceededWatcher() {
//     yield takeEvery(GET_USER_DAILY_RATE_SUCCEEDED, getUserDailyRateSucceededWorker);
// }

export default function* rootSaga() {
    yield all([
        fork(registerUserWatcher),
        fork(loginUserWatcher),
        fork(logoutUserWatcher),
        fork(postUserDailyRateWatcher),
        fork(getUserDailyRateWatcher),
        fork(getUserInfoWatcher),
        // fork(getUserDailyRateSucceededWatcher)
    ]);
}


