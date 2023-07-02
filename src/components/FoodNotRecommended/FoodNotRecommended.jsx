import { useSelector } from 'react-redux';

import s from './FoodNotRecommended.module.css';
import { userDataSelector } from 'redux/selectors/user';

const FoodNotRecommended = () => {
    const { notAllowedProducts } = useSelector(userDataSelector);

    const foodNotRecommendedList = notAllowedProducts;

    return <div className={s.foodNotRecommendedBlock}>
        <h4 className={s.title}>Food not recommended</h4>
        {foodNotRecommendedList.length ?
            <ul className={s.foodNotRecommendedList}>{foodNotRecommendedList.map(foodItem => <li>{foodItem.name}</li>)}</ul> :
            <p>Your diet will be displayed here</p>}
    </div>
}

export default FoodNotRecommended;