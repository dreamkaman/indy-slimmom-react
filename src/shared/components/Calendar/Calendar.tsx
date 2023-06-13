import GetSvg from "../GetSvg";

import { dateFormatter } from "shared/tools/dateFormatter/dateFormatter";

import s from "./Calendar.module.css";
import Button from "../Button/Button";

const Calendar = () => {
    const date = new Date();

    return <>
        <p className={s.dateText}>{dateFormatter(date)}</p>
        <Button className="transparentButton" type="button">
            <GetSvg name="calendarBtn" className={s.calendarIcon} />
        </Button>
    </>
}

export default Calendar;