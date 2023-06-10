import s from './FoodNotRecommended.module.css';

const FoodNotRecommended = () => {
    const foodNotRecommendedList = [];
    return <div>
        <h4 className={s.title}>Food not recommended</h4>
        {foodNotRecommendedList.length ?
            <ul>{foodNotRecommendedList.map(foodItem => <li>{foodItem.name}</li>)}</ul> :
            <p>Your diet will be displayed here</p>}
    </div>
}

export default FoodNotRecommended;