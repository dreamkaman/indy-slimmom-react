import { createReducer } from '@reduxjs/toolkit';
import dateFormat from 'dateformat';

import {
    POST_EATEN_PRODUCT_SUCCEEDED,
    GET_DAY_INFO_SUCCEEDED,
    DELETE_EATEN_PRODUCT_SUCCEEDED
} from 'redux/actions/dayInfo/actionTypes';


import {
    LOGOUT_USER_SUCCEEDED
} from 'redux/actions/user/actionTypes';


export interface IEatenProduct {
    title: {
        en: string,
        ua: string
    } | string,
    weight: number,
    kcal: number,
    id: string
}

export interface IDayInfo {
    id: string,
    eatenProducts: IEatenProduct[],
    daySummary: {
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number
    }
}

export const initialState: IDayInfo = {
    id: '',
    eatenProducts: [],
    daySummary: {
        date: dateFormat(new Date(), 'isoDate'),
        kcalLeft: 0,
        kcalConsumed: 0,
        dailyRate: 0,
        percentsOfDailyRate: 0
    }
}

export const dayInfoReducer = createReducer(initialState, {

    [POST_EATEN_PRODUCT_SUCCEEDED]: (state, action) => {

        const { payload } = action;
        return {
            ...state,
            id: payload.day?.id,
            eatenProducts: payload.day?.eatenProducts ? [...payload.day.eatenProducts] : [...state.eatenProducts, payload.eatenProduct],
            daySummary: {
                ...state.daySummary,
                date: payload.daySummary?.date || state.daySummary.date,
                kcalLeft: payload.daySummary?.kcalLeft || payload.kcalLeft,
                kcalConsumed: payload.daySummary?.kcalConsumed || payload.kcalConsumed,
                dailyRate: payload.daySummary?.dailyRate || payload.dailyRate,
                percentsOfDailyRate: payload.daySummary?.percentsOfDailyRate || payload.percentsOfDailyRate
            }
        }
    },

    [GET_DAY_INFO_SUCCEEDED]: (state, action) => {
        const { payload: { dayInfo, date } } = action;

        return {
            ...state,
            id: dayInfo?.id,
            eatenProducts: dayInfo?.eatenProducts || [],
            daySummary: {
                ...state.daySummary,
                date,
                kcalLeft: dayInfo?.daySummary?.kcalLeft || dayInfo?.kcalLeft,
                kcalConsumed: dayInfo?.daySummary?.kcalConsumed || dayInfo?.kcalConsumed,
                dailyRate: dayInfo?.daySummary?.dailyRate || dayInfo?.dailyRate,
                percentsOfDailyRate: dayInfo?.daySummary?.percentsOfDailyRate || dayInfo?.percentsOfDailyRate
            }
        }
    },
    [DELETE_EATEN_PRODUCT_SUCCEEDED]: (state, action) => {
        const { payload } = action;
        return {
            ...state,
            eatenProducts: state.eatenProducts.filter((product) => product.id !== payload.eatenProductId),
            daySummary: {
                ...state.daySummary,
                kcalLeft: payload.kcalLeft,
                kcalConsumed: payload.kcalConsumed,
                percentsOfDailyRate: payload.percentsOfDailyRate
            }
        }
    },
    [LOGOUT_USER_SUCCEEDED]: () => {
        return { ...initialState };
    }
});