import { createReducer } from '@reduxjs/toolkit';
import dateFormat from 'dateformat';

import * as dayInfoActionTypes from 'redux/actions/dayInfo/actionTypes';

export interface IEatenProduct {
    title: string,
    weight: number,
    kcal: number,
    id: string
}

export interface IDayInfo {
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
        console.log(state);
        console.log(action);
        const { payload } = action;
        console.log(payload);
        return {
            ...state,
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
});