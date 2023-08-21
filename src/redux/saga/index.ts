import {
    all,
    call,
    fork,
    put,
    takeLatest
} from 'redux-saga/effects';

import {
    GET_USER_DAILY_RATE,
    GET_USER_INFO,
    LOGIN_USER,
    LOGOUT_USER,
    POST_USER_DAILY_RATE,
    REGISTER_USER
} from "redux/actions/user/actionTypes";

import {
    deleteEatenProduct,
    findProduct,
    getDayInfo,
    getGeneralDailyRate,
    getUserInfo,
    loginUser,
    logoutUser,
    postEatenProduct,
    postUserDailyRate,
    registerUser,
} from 'API';

import {
    getUserDailyRateSucceededAction,
    getUserInfoSucceededACtion,
    logOutUserSucceededAction,
    loginUserSucceededAction,
    postUserDailyRateSucceededAction
} from 'redux/actions/user/actionCreators';

import { showModalAction } from 'redux/actions/modalWindow/actionCreator';
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
    getDayInfoAction,
    getDayInfoSucceededAction,
    postEatenProductSucceededAction
} from 'redux/actions/dayInfo/actionCreator';

import dateFormat from 'dateformat';

import {
    IDailyRateRequest,
    IDailyRateResponse,
    IDeleteRequest,
    IEatenProductRequest,
    IFindProduct,
    IGetDayInfo,
    ILoginUserResponse,
    IUserLoginData,
    IUserRegisterData
} from 'types';

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
    yield takeLatest(REGISTER_USER, registerUserWorker);
}

function* loginUserWorker(action: {
    type: string,
    payload: IUserLoginData
}) {
    try {
        const { payload } = action;
        const response: ILoginUserResponse = yield call(loginUser, payload);

        yield put(loginUserSucceededAction(response));
        const { accessToken: token } = response;
        const date = dateFormat(new Date(), 'isoDate')

        yield put(getDayInfoAction({ date, token }))
        yield showMessage('The user has successfully logged in!', 'success');
    } catch (error) {
        showMessage(error.message);
    }


}

function* loginUserWatcher() {
    yield takeLatest(LOGIN_USER, loginUserWorker);
}

function* logoutUserWatcher() {
    yield takeLatest(LOGOUT_USER, logoutUserWorker);
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
        token: string,
        currentDate?: string
    }
}) {
    try {
        const { payload: { request, userId, token, currentDate } } = action;
        const response: IDailyRateResponse = yield call(postUserDailyRate, request, userId, token);
        const { data } = response;

        yield put(postUserDailyRateSucceededAction({ request: data, currentDate }));

    } catch (error) {
        showMessage(error.message);
    }
}

function* postUserDailyRateWatcher() {
    yield takeLatest(POST_USER_DAILY_RATE, postUserDailyRateWorker);
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
    yield takeLatest(GET_USER_INFO, getUserInfoWorker);
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
    yield takeLatest(GET_USER_DAILY_RATE, getUserDailyRateWorker);
}

function* findProductWorker(action: {
    payload: IFindProduct,
    type: string
}) {
    try {
        const { payload } = action;

        const filteredProducts = yield call(findProduct, payload);

        yield put(findProductSucceededAction(filteredProducts));
    } catch (error) {
        showMessage('Product not found! Please, input product name in another language!');
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
    yield takeLatest(POST_EATEN_PRODUCT, postEatenProductWorker);
}

function* getDaiInfoWorker(action: {
    payload: IGetDayInfo,
    type: string
}) {
    try {
        const { payload } = action;
        const { data } = yield call(getDayInfo, payload);

        yield put(getDayInfoSucceededAction({ dayInfo: data, date: payload.date }));
    } catch (error) {
        if (error.response.data.message) {
            showMessage(error.response.data.message, 'warning');
        } else {
            showMessage(error.message);
        }
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
    yield takeLatest(DELETE_EATEN_PRODUCT, deleteEatenProductWorker);
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


