import Calendar from "shared/components/Calendar";
import AddProductForm from "components/AddProductForm";

import s from './DairyPage.module.css';


const DairyPage = () => {
    return <section className={s.dairyPageBg}>
        <div className="container">
            <div className={s.calendarWrapper}>
                <Calendar />
            </div>
            <AddProductForm />
        </div>
    </section>
}

export default DairyPage;