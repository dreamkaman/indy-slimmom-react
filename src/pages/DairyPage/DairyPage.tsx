import Calendar from "shared/components/Calendar";
import AddProductForm from "components/AddProductForm";
import SummeryForDay from "components/SummeryForDay";
import FoodNotRecommended from "components/FoodNotRecommended";

import s from './DairyPage.module.css';



const DairyPage = () => {
    return <section className={s.dairyPageBg}>
        <div className={`container ${s.content}`}>
            <div className={s.calendarAndForm}>
                <div className={s.calendarWrapper}>
                    <Calendar />
                </div>
                <AddProductForm />
            </div>
            <div className={s.summeryAndFoodBlock}>
                <div className={s.wrapperSummery}>
                    <SummeryForDay />
                </div>
                <div className={s.wrapperFoodNotRecommended}>
                    <FoodNotRecommended />
                </div>

            </div>
        </div>
    </section>
}

export default DairyPage;