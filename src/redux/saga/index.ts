import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
    GET_USER_DAILY_RATE,
    GET_USER_INFO,
    LOGIN_USER,
    LOGOUT_USER,
    POST_USER_DAILY_RATE,
    REGISTER_USER
} from "redux/actions/user/actionTypes";

import {
    IDailyRateRequest,
    IDeleteRequest,
    IEatenProductRequest,
    IFindProduct,
    IGetDayInfo,
    IUserLoginData,
    IUserRegisterData,
    deleteEatenProduct,
    findProduct,
    getDayInfo,
    getGeneralDailyRate,
    getUserInfo,
    loginUser,
    logoutUser,
    postEatenProduct,
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
import { findProductSucceededAction } from 'redux/actions/productSearch/actionCreator';
import {
    DELETE_EATEN_PRODUCT,
    GET_DAY_INFO,
    POST_EATEN_PRODUCT
} from 'redux/actions/dayInfo/actionTypes';
import {
    deleteEatenProductSucceededAction,
    getDayInfoSucceededAction,
    postEatenProductSucceededAction
} from 'redux/actions/dayInfo/actionCreator';

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
    payload: IFindProduct,
    type: string
}) {
    try {
        const { payload } = action;

        const filteredProducts = yield call(findProduct, payload);

        yield put(findProductSucceededAction(filteredProducts));
    } catch (error) {
        showMessage('Product not found! Please, input product name in Ukrainian!');
    }

}

function* findProductWatcher() {
    yield takeLatest(FIND_PRODUCT, findProductWorker);
}

function* postEatenProductWorker(action: {
    payload: {
        eatenProduct: IEatenProductRequest,
        token: string
    },
    type: string
}) {
    try {
        const { payload } = action;
        const { data } = yield call(postEatenProduct, payload);

        yield put(postEatenProductSucceededAction(data));
    } catch (error) {
        showMessage(error.message);
    }
}

function* postEatenProductWatcher() {
    yield takeEvery(POST_EATEN_PRODUCT, postEatenProductWorker);
}

function* getDaiInfoWorker(action: {
    payload: IGetDayInfo,
    type: string
}) {
    try {
        const { payload } = action;
        const { data } = yield call(getDayInfo, payload);
        yield put(getDayInfoSucceededAction(data));
    } catch (error) {
        showMessage(error.message);
    }
}

function* getDayInfoWatcher() {
    yield takeLatest(GET_DAY_INFO, getDaiInfoWorker);
}

function* deleteEatenProductWorker(action:
    {
        payload: {
            requestData: IDeleteRequest,
            token: string
        },
        type: string
    }) {
    try {
        const { payload } = action;

        const response = yield call(deleteEatenProduct, payload);

        const { requestData: { eatenProductId } } = payload;

        const { kcalLeft,
            kcalConsumed,
            percentsOfDailyRate } = response.data.newDaySummary;

        yield put(deleteEatenProductSucceededAction({
            eatenProductId,
            kcalLeft,
            kcalConsumed,
            percentsOfDailyRate
        }))
    } catch (error) {
        showMessage(error.message);
    }

}

function* deleteEatenProductWatcher() {
    yield takeEvery(DELETE_EATEN_PRODUCT, deleteEatenProductWorker);
}

export default function* rootSaga() {
    yield all([
        fork(registerUserWatcher),
        fork(loginUserWatcher),
        fork(logoutUserWatcher),
        fork(postUserDailyRateWatcher),
        fork(getUserDailyRateWatcher),
        fork(getUserInfoWatcher),
        fork(findProductWatcher),
        fork(postEatenProductWatcher),
        fork(getDayInfoWatcher),
        fork(deleteEatenProductWatcher)
    ]);
}


