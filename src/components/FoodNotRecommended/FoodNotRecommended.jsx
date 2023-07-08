import { useSelector } from 'react-redux';

import { userNotAllowedProductsSelector } from 'redux/selectors/user';

import s from './FoodNotRecommended.module.css';


const FoodNotRecommended = () => {
    const foodNotRecommendedList = useSelector(userNotAllowedProductsSelector);

    console.dir(foodNotRecommendedList);

    return <div className={s.foodNotRecommendedBlock}>
        <h4 className={s.title}>Food not recommended</h4>
        {!!foodNotRecommendedList.length ?
            <ul className={s.foodNotRecommendedList}>{
                foodNotRecommendedList.map(
                    (foodItem, index) => <li key={index}>{foodItem}</li>
                )
            }
            </ul> :
            <p>Your diet will be displayed here</p>}
    </div>
}

export default FoodNotRecommended;