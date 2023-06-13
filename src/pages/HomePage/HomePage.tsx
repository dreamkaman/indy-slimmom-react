import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import ModalWindow from 'shared/components/ModalWindow';
import RecommendedDailyCalorie from 'shared/components/RecommendedDailyCalorie';

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
                <RecommendedDailyCalorie />
            </ModalWindow>
        }
    </section>
}

export default HomePage;