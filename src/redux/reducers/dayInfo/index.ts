// import { createReducer } from '@reduxjs/toolkit';

// import * as dayInfoActionTypes from 'redux/actions/modal/actionTypes';

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