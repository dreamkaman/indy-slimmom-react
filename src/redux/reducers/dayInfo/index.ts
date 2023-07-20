import { createReducer } from '@reduxjs/toolkit';
import dateFormat from 'dateformat';

import * as dayInfoActionTypes from 'redux/actions/dayInfo/actionTypes';

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
    [dayInfoActionTypes.POST_EATEN_PRODUCT_SUCCEEDED]: (state, action) => {
        const { payload } = action;
        return {
            ...state,
            id: payload.day.id,
            eatenProducts: [...payload.day.eatenProducts],
            daySummary: {
                ...state.daySummary,
                date: payload.daySummary.date,
                kcalLeft: payload.daySummary.kcalLeft,
                kcalConsumed: payload.daySummary.kcalConsumed,
                dailyRate: payload.daySummary.dailyRate,
                percentsOfDailyRate: payload.daySummary.percentsOfDailyRate
            }
        }
    },
    [dayInfoActionTypes.GET_DAY_INFO_SUCCEEDED]: (state, action) => {
        const { payload } = action;
        console.log(payload);
        return {
            ...state,
            id: payload.id,
            eatenProducts: payload.eatenProducts,
            daySummary: {
                ...state.daySummary,
                date: payload.daySummary.date,
                kcalLeft: payload.daySummary.kcalLeft,
                kcalConsumed: payload.daySummary.kcalConsumed,
                dailyRate: payload.daySummary.dailyRate,
                percentsOfDailyRate: payload.daySummary.percentsOfDailyRate
            }
        }
    },
    [dayInfoActionTypes.DELETE_EATEN_PRODUCT_SUCCEEDED]: (state, action) => {
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
});