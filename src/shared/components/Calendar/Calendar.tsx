import GetSvg from "../GetSvg";

import { dateFormatter } from "shared/tools/dateFormatter/dateFormatter";

import s from "./Calendar.module.css";

const Calendar = () => {
    const date = new Date();

    return <>
        <p className={s.dateText}>{dateFormatter(date)}</p>
        <GetSvg name="calendarBtn" className={s.calendarIcon} />
    </>
}

export default Calendar;