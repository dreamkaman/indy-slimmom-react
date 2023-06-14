import Button from '../../shared/components/Button/Button';

import s from './RecommendedDailyCalorieForm.module.css';

const RecommendedDailyCalorieForm = () => {
    const count = 2800;
    const foodList = [
        {
            id: 1,
            name: 'Red meat'
        },
        {
            id: 2,
            name: 'Cheese'
        },
        {
            id: 3,
            name: 'Milk'
        },
        {
            id: 4,
            name: 'Flour products'
        },
        {
            id: 5,
            name: 'Tomato'
        },
        {
            id: 6,
            name: 'Paper'
        },
    ];

    return <form className={s.recommendedDailyCalorieForm}>
        <h3 className={s.formTitle}>Your recommended daily <br />calorie intake is</h3>
        <p className={s.calorieTxt}>{count} <span>kcal</span></p>
        <h4 className={s.formSubtitle}>Foods you should not eat</h4>
        {foodList.length && <ol className={s.foodList}>
            {foodList.map(foodItem => <li key={foodItem.id}>{foodItem.name}</li>)}
        </ol>}
        <Button type='button' name='Start losing weight' className={`${s.startLosingWeightBtn} buttonActive buttonRectangle`} />
    </form>
}

export default RecommendedDailyCalorieForm;