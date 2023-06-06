import GetSvg from "../GetSvg";

import s from "./Calendar.module.css";

const Calendar = () => {
    const date = new Date().toDateString();

    return <>
        <p className={s.dateText}>{date}</p>
        <GetSvg name="calendarBtn" className={s.calendarIcon} />
    </>
}

export default Calendar;