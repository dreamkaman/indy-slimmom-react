import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import ModalWindow from 'shared/components/ModalWindow';
import RecommendedDailyCalorie from 'shared/components/RecommendedDailyCalorie';

import s from './HomePage.module.css';


const HomePage = () => {
    const isAuth = false;
    const showModal = false;

    return <>
        <section className={s.homeBg}>
            <div className='container'>
                {!isAuth && <CalculateCaloriesForm />}
            </div>
        </section>
        {showModal &&
            <ModalWindow>
                <RecommendedDailyCalorie />
            </ModalWindow>
        }
    </>
}

export default HomePage;