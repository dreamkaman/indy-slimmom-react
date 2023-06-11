import Calendar from "shared/components/Calendar";
import AddProductForm from "components/AddProductForm";
import SummeryForDay from "components/SummeryForDay";
import FoodNotRecommended from "components/FoodNotRecommended";

import s from './DairyPage.module.css';



const DairyPage = () => {
    return <section className={s.dairyPageBg}>
        <div className="container">
            <div className={s.calendarWrapper}>
                <Calendar />
                <AddProductForm />
            </div>
            <div className={s.summeryAndFood}>
                <SummeryForDay />
                <FoodNotRecommended />
            </div>
        </div>
    </section>
}

export default DairyPage;