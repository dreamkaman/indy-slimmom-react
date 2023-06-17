import CalculateCaloriesForm from 'components/CalculateCaloriesForm';
import ModalWindow from 'shared/components/ModalWindow';
import RecommendedDailyCalorieForm from 'components/RecommendedDailyCalorieForm';

import { logoutUser } from 'API';
import { loginUser } from 'API';
// import { registerUser } from 'API';

import s from './HomePage.module.css';


const HomePage = () => {
    const isAuth = true;
    const showModal = false;

    const handleClick = () => {
        // registerUser({
        //     email: 'test@testdomain.ua',
        //     password: 'Qwerty$12',
        //     username: 'TestUser'
        // });
        loginUser({
            email: 'test@testdomain.ua',
            password: 'Qwerty$12',
        });
    }

    const handleClick2 = () => {
        logoutUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDhjM2I2ZDFmYmQ4MTA1MjU0MjIzZmEiLCJzaWQiOiI2NDhlMTY3YzFmYmQ4MTA1MjU0MjI5NjAiLCJpYXQiOjE2ODcwMzM0NjgsImV4cCI6MTY4NzAzNzA2OH0.f1Dwl6u_9xpC1cS6IZmM38Hvqa7mIMUWttA3wULBxIY');
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
        <button type='button' onClick={handleClick2}>Test API 2</button>
    </section>
}

export default HomePage;