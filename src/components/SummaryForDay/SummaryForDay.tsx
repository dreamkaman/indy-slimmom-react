import { useSelector } from "react-redux";

import { dateFormatter } from "shared/tools/dateFormatter/dateFormatter";
import { addDimension } from "shared/tools/addDimension/addDimension";

import s from './SummaryForDay.module.css';
import { userDataSelector } from "redux/selectors/user";


const SummaryForDay = () => {
    const { dailyRate } = useSelector(userDataSelector);

    const day = new Date();
    const leftCalories = '0.00';
    const consumedCalories = '0.00';
    const dailyRateCalories = dailyRate || '0.00';
    const percentCalories = '0.00';

    return <div className={s.summaryBlock}>
        <h4 className={s.summaryTitle}>Summary for {dateFormatter(day)}</h4>
        <p className={s.summaryItem}>Left <span>{addDimension(leftCalories, "kcal")}</span></p>
        <p className={s.summaryItem}>Consumed <span>{addDimension(consumedCalories, "kcal")}</span></p>
        <p className={s.summaryItem}>Daily rate <span>{addDimension(dailyRateCalories, "kcal")}</span></p>
        <p className={s.summaryItem}>n% of normal <span>{addDimension(percentCalories, "%")}</span></p>
    </div>
}

export default SummaryForDay;