import { DateCalendar } from '@mui/x-date-pickers';
import GetSvg from "../GetSvg";
import Button from "../Button/Button";

import { dateFormatter } from "shared/tools/dateFormatter/dateFormatter";

import s from "./Calendar.module.css";


const Calendar = () => {
    const date = new Date();
    const showCalendarText = false;
    return <>
        <p className={s.dateText}>{dateFormatter(date)}</p>
        <Button className="transparentButton" type="button">
            <GetSvg name="calendarBtn" className={s.calendarIcon} />
        </Button>
        {showCalendarText && <div className={s.calendarText}>
            <DateCalendar />
        </div>}

    </>
}

export default Calendar;