import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import ModalWindow from 'shared/components/ModalWindow';
import RecommendedDailyCalorieForm from 'components/RecommendedDailyCalorieForm';

import s from './HomePage.module.css';


const HomePage = () => {
    const isAuth = true;
    const showModal = false;

    return <section className={s.homeBg}>
        {!isAuth && <div className='container'>
            <div className={s.calculatorFormWrapper}>
                <CalculateCaloriesForm />
            </div>

        </div>}
        {showModal &&
            <ModalWindow>
                <RecommendedDailyCalorieForm />
            </ModalWindow>
        }
    </section>
}

export default HomePage;