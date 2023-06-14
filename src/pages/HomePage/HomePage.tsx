import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import ModalWindow from 'shared/components/ModalWindow';
import RecommendedDailyCalorieModal from 'components/RecommendedDailyCalorieModal';

import s from './HomePage.module.css';


const HomePage = () => {
    const isAuth = false;
    const showModal = true;

    return <section className={s.homeBg}>
        {!isAuth && <div className='container'>
            <div className={s.calculatorFormWrapper}>
                <CalculateCaloriesForm />
            </div>

        </div>}
        {showModal &&
            <ModalWindow>
                <RecommendedDailyCalorieModal />
            </ModalWindow>
        }
    </section>
}

export default HomePage;