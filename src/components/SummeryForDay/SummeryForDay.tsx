import { dateFormatter } from "shared/tools/dateFormatter/dateFormatter";
import { addDimension } from "shared/tools/addDimension/addDimension";

import s from './SummeryForDay.module.css';

const SummeryForDay = () => {
    const day = new Date();
    const leftCalories = '000';
    const consumedCalories = '000';
    const dailyRateCalories = '000';
    const percentCalories = '000';

    return <div className={s.summeryBlock}>
        <h4 className={s.summeryTitle}>Summery for {dateFormatter(day)}</h4>
        <p className={s.summeryItem}>Left <span>{addDimension(leftCalories, "kcal")}</span></p>
        <p className={s.summeryItem}>Consumed <span>{addDimension(consumedCalories, "kcal")}</span></p>
        <p className={s.summeryItem}>Daily rate <span>{addDimension(dailyRateCalories, "kcal")}</span></p>
        <p className={s.summeryItem}>n% of normal <span>{addDimension(percentCalories, "%")}</span></p>
    </div>
}

export default SummeryForDay;