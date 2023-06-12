import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import SummeryForDay from 'components/SummeryForDay';
import FoodNotRecommended from 'components/FoodNotRecommended';

import s from './HealthCalculatorPage.module.css';


const HealthCalculatorPage = () => {

    return <section className={s.dairyPageContent}>
        <div className={s.calculatorForm}>
            <CalculateCaloriesForm />
        </div>
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

export default HealthCalculatorPage;