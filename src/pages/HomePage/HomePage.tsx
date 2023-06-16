import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import ModalWindow from 'shared/components/ModalWindow';
import RecommendedDailyCalorieForm from 'components/RecommendedDailyCalorieForm';

import { loginUser } from 'API';

import s from './HomePage.module.css';


const HomePage = () => {
    const isAuth = true;
    const showModal = false;

    const handleClick = () => {
        loginUser({
            email: 'test@testdomain.ua',
            password: 'Qwerty$12',
        });
    }

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
        <button type='button' onClick={handleClick}>Test API</button>
    </section>
}

export default HomePage;