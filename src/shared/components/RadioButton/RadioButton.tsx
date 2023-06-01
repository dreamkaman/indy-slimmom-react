import s from './RadioButton.module.css';


const RadioButton = () => {
    return <div className={s.radioBtnWrapper}>
        <label htmlFor="group1">1
            <input type="radio" name="bloodGroup" id="group1" />
        </label>
        <label htmlFor="group2">2
            <input type="radio" name="bloodGroup" id="group2" />
        </label>
        <label htmlFor="group3">3
            <input type="radio" name="bloodGroup" id="group3" />
        </label>
        <label htmlFor="group4">4
            <input type="radio" name="bloodGroup" id="group4" />
        </label>
    </div>
}

export default RadioButton;