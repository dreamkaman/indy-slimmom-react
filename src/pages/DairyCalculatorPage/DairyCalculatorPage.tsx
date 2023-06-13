import Calendar from "shared/components/Calendar";
import { useLocation } from "react-router-dom";

import AddProductForm from "components/AddProductForm";
import SummeryForDay from "components/SummeryForDay";
import FoodNotRecommended from "components/FoodNotRecommended";
import CalculateCaloriesForm from "components/CalculateCaloriesForm";

import s from './DairyCalculatorPage.module.css';


const DairyCalculatorPage = () => {

    const { pathname } = useLocation();

    return <section className={s.dairyPageContent}>
        {pathname === '/dairy' && <div className={s.calendarAndFormBlock}>
            <div className={s.calendarWrapper}>
                <Calendar />
            </div>
            <AddProductForm />
        </div>}
        {pathname === '/calculator' && <div className={s.calculatorForm}>
            <CalculateCaloriesForm />
        </div>}
        <div className={s.summeryAndFoodBlock}>
            <div className={s.wrapperSummery}>
                <SummeryForDay />
            </div>
            <div className={s.wrapperFoodNotRecommended}>
                <FoodNotRecommended />
            </div>
        </div>
    </section>
}

export default DairyCalculatorPage;