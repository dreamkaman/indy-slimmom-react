import { useState } from 'react';
import dateFormat from 'dateformat';

import { DateCalendar } from '@mui/x-date-pickers';
import GetSvg from "../GetSvg";
import Button from "../Button/Button";

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getDayInfoAction } from 'redux/actions/dayInfo/actionCreator';
import { isAuthSelector } from 'redux/selectors/user';
import { getCurrentDateSelector } from 'redux/selectors/dayInfo';
import dayjs, { Dayjs } from 'dayjs';

import s from "./Calendar.module.css";




const Calendar = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(isAuthSelector)

    const [showCalendarText, setShowCalendarText] = useState(false);

    const currentDate = useAppSelector(getCurrentDateSelector);

    const clickCalendarHandler = () => {
        setShowCalendarText(!showCalendarText);
    }

    const changeCalendarHandler = (value: Dayjs | null) => {
        if (!value) return; // або обробка null

        dispatch(getDayInfoAction({ date: value.format('YYYY-MM-DD'), token }));
        setShowCalendarText(false);
    };

    return <>
        <p className={s.dateText}>{dateFormat(currentDate, "dd.mm.yyyy")}</p>
        <Button className="transparentButton" type="button" onClick={clickCalendarHandler}>
            <GetSvg name="calendarBtn" className={s.calendarIcon} />
        </Button>
        {showCalendarText && <div className={s.calendarText}>
            <DateCalendar onChange={changeCalendarHandler} maxDate={dayjs()} />
        </div>}
    </>
}

export default Calendar;