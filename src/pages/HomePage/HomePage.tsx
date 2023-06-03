import CalculateCaloriesForm from 'components/CalculateCaloriesForm/CalculateCaloriesForm';
import s from './HomePage.module.css';

const HomePage = () => {
    const isAuth = false;

    return <section className={s.homeBg}>
        {!isAuth && <CalculateCaloriesForm />}
    </section>
}

export default HomePage;