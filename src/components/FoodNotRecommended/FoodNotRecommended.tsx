import { useAppSelector } from 'redux/hooks';

import { userNotAllowedProductsSelector } from 'redux/selectors/user';

import s from './FoodNotRecommended.module.css';


const FoodNotRecommended = () => {
    const foodNotRecommendedList = useAppSelector(userNotAllowedProductsSelector);

    return <div className={s.foodNotRecommendedBlock}>
        <h4 className={s.title}>Food not recommended</h4>
        {!!foodNotRecommendedList.length ?
            <ul className={s.foodNotRecommendedList}>{
                foodNotRecommendedList.map(
                    (foodItem, index) => <li key={index} className={s.foodNotRecommendedListItem}>{foodItem}</li>
                )
            }
            </ul> :
            <p>Your diet will be displayed here</p>}
    </div>
}

export default FoodNotRecommended;