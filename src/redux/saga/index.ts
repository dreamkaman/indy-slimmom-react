import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

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
    IUserRegisterData,
    getGeneralDailyRate,
    getUserInfo,
    loginUser,
    logoutUser,
    postUserDailyRate,
    registerUser
} from 'API';
import {
    getUserDailyRateSucceededAction,
    getUserInfoAction,
    getUserInfoSucceededACtion,
    logOutUserSucceededAction,
    loginUserSucceededAction,
    postUserDailyRateSucceededAction,
} from 'redux/actions/user/actionCreators';
import { showModalAction } from 'redux/actions/modal/actionCreator';
import { FIND_PRODUCT } from 'redux/actions/productSearch/actionTypes';
import { showMessage } from 'shared/tools/showMessages';

function* registerUserWorker(action: {
    payload: IUserRegisterData,
    type: string
}) {
    try {
        const { payload } = action;
        yield call(registerUser, payload);
        showMessage(`The user has successfully registered!`, 'success');
    } catch (error) {
        showMessage(error.message);
    }

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
        yield showMessage('The user has successfully logged in!', 'success');
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

function* findProductWorker(action: {
    payload: string,
    type: string
}) {
    console.log('FIND_PRODUCT works!');
    console.log('Action');
    console.log(action);
    yield;
}

function* findProductWatcher() {
    yield takeLatest(FIND_PRODUCT, findProductWorker);
}

export default function* rootSaga() {
    yield all([
        fork(registerUserWatcher),
        fork(loginUserWatcher),
        fork(logoutUserWatcher),
        fork(postUserDailyRateWatcher),
        fork(getUserDailyRateWatcher),
        fork(getUserInfoWatcher),
        fork(findProductWatcher)
        // fork(getUserDailyRateSucceededWatcher)
    ]);
}


