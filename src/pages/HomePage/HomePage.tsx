import { useSelector } from 'react-redux';
import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import ModalWindow from 'shared/components/ModalWindow';
import RecommendedDailyCalorieForm from 'components/RecommendedDailyCalorieForm';

import { isAuthSelector } from 'redux/selectors/auth';
import s from './HomePage.module.css';


const HomePage = () => {
    const isAuth = useSelector(isAuthSelector);
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