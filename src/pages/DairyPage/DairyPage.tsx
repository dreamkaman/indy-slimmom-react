import Calendar from "shared/components/Calendar/Calendar";

import s from './DairyPage.module.css';

const DairyPage = () => {
    return <section className={s.dairyPageBg}>
        <div className="container">
            <div className={s.calendarWrapper}>
                <Calendar />
            </div>
        </div>
    </section>
}

export default DairyPage;