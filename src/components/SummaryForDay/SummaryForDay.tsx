import { useAppSelector } from "redux/hooks";

import { addDimension } from "shared/tools/addDimension/addDimension";
import { getDaySummerySelector } from "redux/selectors/dayInfo";
import dateFormat from "dateformat";

import s from './SummaryForDay.module.css';


const SummaryForDay = () => {
    const daySummary = useAppSelector(getDaySummerySelector);

    const { date, kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = daySummary;

    return <div className={s.summaryBlock}>
        <h4 className={s.summaryTitle}>Summary for {dateFormat(date, "dd.mm.yyyy")}</h4>
        <p className={s.summaryItem}>Left <span>{addDimension(Math.round(kcalLeft), "kcal")}</span></p>
        <p className={s.summaryItem}>Consumed <span>{addDimension(Math.round(kcalConsumed), "kcal")}</span></p>
        <p className={s.summaryItem}>Daily rate <span>{addDimension(Math.round(dailyRate), "kcal")}</span></p>
        <p className={s.summaryItem}>n% of normal <span>{addDimension(Math.round(percentsOfDailyRate), "%")}</span></p>
    </div>
}

export default SummaryForDay;