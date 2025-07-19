import { SyntheticEvent, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Subject, fromEvent, debounceTime, map, takeUntil } from "rxjs";

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

import s from './DairyCalculatorPage.module.css';



const DairyCalculatorPage = () => {

    const ref = useRef<HTMLInputElement>(null)

    const { pathname } = useLocation();

    const dispatch = useAppDispatch();

    const token = useAppSelector(isAuthSelector);

    const showModal = useAppSelector(showModalSelector);

    useEffect(() => {
        const inputEl = ref.current;
        if (!inputEl) return;

        const destroy$ = new Subject();
        fromEvent(inputEl, 'input').pipe(
            takeUntil(destroy$),
            debounceTime(2000),
            map(searchText => console.log(searchText))
        )
        return () => { 
            destroy$.next(1);
            destroy$.complete();
        }
    }, []);

    const handleInput = (e: SyntheticEvent) => {
        const searchText = e.target['value'];
        if (searchText.length >= 2 && searchText.length <= 30) {
            dispatch(findProductAction({ token, searchText }))
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const debouncedHandleInput = useCallback(
    //     debounceLD(handleInput, 1000), []
    // );

    return <>
        <section className={s.dairyPageContent}>
            {pathname === '/dairy' && <div className={s.calendarAndFormBlock}>
                <div className={s.calendarWrapper}>
                    <Calendar />
                </div>
                <AddProductForm onInput={handleInput} ref={ref} />
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
            <AddProductFormModal onInput={handleInput} />
            {/* <AddProductFormModal onInput={debouncedHandleInput} /> */}
        </ModalWindow>}
    </>
}

export default DairyCalculatorPage;