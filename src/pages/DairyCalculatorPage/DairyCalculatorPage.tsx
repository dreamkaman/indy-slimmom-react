import { SyntheticEvent, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { debounce } from "lodash";

import Calendar from "shared/components/Calendar";
import AddProductForm from "components/AddProductForm";
import SummaryForDay from "components/SummaryForDay";
import FoodNotRecommended from "components/FoodNotRecommended";
import CalculateCaloriesForm from "components/CalculateCaloriesForm";
import ModalWindow from "shared/components/ModalWindow/ModalWindow";
import AddProductFormModal from "components/AddProductFormModal/AddProductFormModal";

import { useAppSelector, useAppDispatch } from "redux/hooks";
import { showModalSelector } from "redux/selectors/modal";
import { isAuthSelector } from "redux/selectors/user";
import { findProductAction } from "redux/actions/productSearch/actionCreator";
// import { getDayInfoAction } from "redux/actions/dayInfo/actionCreator";
// import { getDaySummerySelector } from "redux/selectors/dayInfo";

import s from './DairyCalculatorPage.module.css';

const DairyCalculatorPage = () => {

    const { pathname } = useLocation();

    const dispatch = useAppDispatch();

    const token = useAppSelector(isAuthSelector);

    const showModal = useAppSelector(showModalSelector);

    const handleInput = (e: SyntheticEvent) => {
        const searchText = e.target['value'];
        if (searchText.length >= 2 && searchText.length <= 30) {
            dispatch(findProductAction({ token, searchText }))
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedHandleInput = useCallback(
        debounce(handleInput, 1000), []
    );

    return <>
        <section className={s.dairyPageContent}>
            {pathname === '/dairy' && <div className={s.calendarAndFormBlock}>
                <div className={s.calendarWrapper}>
                    <Calendar />
                </div>
                <AddProductForm onInput={debouncedHandleInput} />
            </div>}
            {pathname === '/calculator' && <div className={s.calculatorForm}>
                <CalculateCaloriesForm />
            </div>}
            <div className={s.summaryAndFoodBlock}>
                <div className={s.wrapperSummary}>
                    <SummaryForDay />
                </div>
                <div className={s.wrapperFoodNotRecommended}>
                    <FoodNotRecommended />
                </div>
            </div>
        </section>
        {showModal && <ModalWindow>
            <AddProductFormModal onInput={debouncedHandleInput} />
        </ModalWindow>}
    </>
}

export default DairyCalculatorPage;