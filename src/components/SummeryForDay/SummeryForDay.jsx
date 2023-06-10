import { dateFormatter } from 'shared/tools/dateFormatter';

import s from './SummeryForDay.module.css';

const SummeryForDay = () => {
    const day = new Date();
    const leftCalories = '000';
    const consumedCalories = '000';
    const dailyRateCalories = '000';
    const percentCalories = '000';

    return <div className={s.summeryBlock}>
        <h4 className={s.summeryTitle}>Summery for {dateFormatter(day)}</h4>
        <p className={s.summeryItem}>Left <span>{leftCalories} kcal</span></p>
        <p className={s.summeryItem}>Consumed <span>{consumedCalories} kcal</span></p>
        <p className={s.summeryItem}>Daily rate <span>{dailyRateCalories} kcal</span></p>
        <p className={s.summeryItem}>n% of normal <span>{percentCalories} kcal</span></p>
    </div>
}

export default SummeryForDay;