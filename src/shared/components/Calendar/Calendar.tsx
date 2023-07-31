import { useState } from 'react';
import dateFormat from 'dateformat';

import { DateCalendar } from '@mui/x-date-pickers';
import GetSvg from "../GetSvg";
import Button from "../Button/Button";

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getDayInfoAction } from 'redux/actions/dayInfo/actionCreator';
import { isAuthSelector } from 'redux/selectors/user';

import s from "./Calendar.module.css";


const Calendar = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(isAuthSelector)

    const [currentDate, setCurrentDate] = useState(new Date());
    const [showCalendarText, setShowCalendarText] = useState(false);

    const clickCalendarHandler = () => {
        setShowCalendarText(!showCalendarText);
    }

    const changeCalendarHandler = (value: { $d: Date; }) => {
        setCurrentDate(value.$d);
        setShowCalendarText(false);
        dispatch(getDayInfoAction({ date: dateFormat(currentDate, 'isoDate'), token }));
    }

    return <>
        <p className={s.dateText}>{dateFormat(currentDate, "dd.mm.yyyy")}</p>
        <Button className="transparentButton" type="button" onClick={clickCalendarHandler}>
            <GetSvg name="calendarBtn" className={s.calendarIcon} />
        </Button>
        {showCalendarText && <div className={s.calendarText}>
            <DateCalendar onChange={changeCalendarHandler} />
        </div>}

    </>
}

export default Calendar;