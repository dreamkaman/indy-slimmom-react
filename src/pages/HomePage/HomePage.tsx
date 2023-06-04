import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import ModalWindow from 'shared/components/ModalWindow';
import RecommendedDailyCalorie from 'shared/components/RecommendedDailyCalorie';

import s from './HomePage.module.css';


const HomePage = () => {
    const isAuth = false;
    const showModal = true;

    return <>
        <section className={`${s.homeBg} container`}>
            {!isAuth && <CalculateCaloriesForm />}
        </section>
        {showModal &&
            <ModalWindow>
                <RecommendedDailyCalorie />
            </ModalWindow>
        }
    </>
}

export default HomePage;