import { useSelector } from "react-redux";

import { dateFormatter } from "shared/tools/dateFormatter/dateFormatter";
import { addDimension } from "shared/tools/addDimension/addDimension";

import s from './SummaryForDay.module.css';
import { userDataSelector } from "redux/selectors/user";


const SummaryForDay = () => {
    const userData = useSelector(userDataSelector);

    console.log(userData);

    const day = new Date();
    const leftCalories = '000';
    const consumedCalories = '000';
    const dailyRateCalories = '000';
    const percentCalories = '000';

    return <div className={s.summaryBlock}>
        <h4 className={s.summaryTitle}>Summary for {dateFormatter(day)}</h4>
        <p className={s.summaryItem}>Left <span>{addDimension(leftCalories, "kcal")}</span></p>
        <p className={s.summaryItem}>Consumed <span>{addDimension(consumedCalories, "kcal")}</span></p>
        <p className={s.summaryItem}>Daily rate <span>{addDimension(dailyRateCalories, "kcal")}</span></p>
        <p className={s.summaryItem}>n% of normal <span>{addDimension(percentCalories, "%")}</span></p>
    </div>
}

export default SummaryForDay;