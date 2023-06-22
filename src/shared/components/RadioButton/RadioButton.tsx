import s from './RadioButton.module.css';


const RadioButton = ({ register = null, rules = null }) => {
    return <>
        <h3 className={s.radioBtnTitle}>Blood type*</h3>
        <ul className={s.radioBtnWrapper}>
            <li>
                <input type="radio" id="group1" value="1" defaultChecked {...register("bloodGroup", rules)} />
                <label htmlFor="group1">1</label>
            </li>
            <li>
                <input type="radio" id="group2" value="2" {...register("bloodGroup", rules)} />
                <label htmlFor="group2">2</label>
            </li>
            <li>
                <input type="radio" id="group3" value="3" {...register("bloodGroup", rules)} />
                <label htmlFor="group3">3</label>
            </li>
            <li>
                <input type="radio" id="group4" value="4" {...register("bloodGroup", rules)} />
                <label htmlFor="group4">4</label>
            </li>
        </ul>
    </>

}

export default RadioButton;