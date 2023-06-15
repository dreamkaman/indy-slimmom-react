import { useLocation } from "react-router-dom";
import { useState } from "react";

import Calendar from "shared/components/Calendar";
import AddProductForm from "components/AddProductForm";
import SummeryForDay from "components/SummeryForDay";
import FoodNotRecommended from "components/FoodNotRecommended";
import CalculateCaloriesForm from "components/CalculateCaloriesForm";

import s from './DairyCalculatorPage.module.css';
import ModalWindow from "shared/components/ModalWindow/ModalWindow";
import AddProductFormModal from "components/AddProductFormModal/AddProductFormModal";



const DairyCalculatorPage = () => {

    const { pathname } = useLocation();
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        setShowModal(!showModal);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(!showModal);
    }

    return <>
        <section className={s.dairyPageContent}>
            {pathname === '/dairy' && <div className={s.calendarAndFormBlock}>
                <div className={s.calendarWrapper}>
                    <Calendar />
                </div>
                <AddProductForm onClick={handleClick} />
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
        {showModal && <ModalWindow>
            <AddProductFormModal onSubmit={handleSubmit} />
        </ModalWindow>}
    </>
}

export default DairyCalculatorPage;