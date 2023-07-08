import { useNavigate } from 'react-router-dom';

import Button from '../../shared/components/Button/Button';

import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from 'redux/hooks';
import { userDailyRateSelector, userNotAllowedProductsSelector } from 'redux/selectors/user';

import s from './RecommendedDailyCalorieForm.module.css';

const RecommendedDailyCalorieForm = () => {
    const navigate = useNavigate();

    const userDailyRate = useAppSelector(userDailyRateSelector);

    const userNotAllowedProducts = useAppSelector(userNotAllowedProductsSelector);

    const handleStartLosingWeightClick = () => {
        navigate('/register');
    }

    return <form className={s.recommendedDailyCalorieForm}>
        <h3 className={s.formTitle}>Your recommended daily <br />calorie intake is</h3>
        <p className={s.calorieTxt}>{userDailyRate} <span>kcal</span></p>
        <h4 className={s.formSubtitle}>Foods you should not eat</h4>
        {!!userNotAllowedProducts.length && <ol className={s.foodList}>
            {userNotAllowedProducts.map(productItem => <li key={uuidv4()}>{productItem}</li>)}
        </ol>}
        <Button
            type='button'
            name='Start losing weight'
            className={`${s.startLosingWeightBtn} buttonActive buttonRectangle`}
            onClick={handleStartLosingWeightClick} />
    </form>
}

export default RecommendedDailyCalorieForm;