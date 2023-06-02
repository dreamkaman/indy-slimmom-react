import s from './RadioButton.module.css';


const RadioButton = () => {
    return <>
        <h3 className={s.radioBtnTitle}>Blood type*</h3>
        <ul className={s.radioBtnWrapper}>
            <li>
                <input type="radio" name="bloodGroup" id="group1" defaultChecked />
                <label htmlFor="group1">1</label>
            </li>
            <li>
                <input type="radio" name="bloodGroup" id="group2" />
                <label htmlFor="group2">2</label>
            </li>
            <li>
                <input type="radio" name="bloodGroup" id="group3" />
                <label htmlFor="group3">3</label>
            </li>
            <li>
                <input type="radio" name="bloodGroup" id="group4" />
                <label htmlFor="group4">4</label>
            </li>
        </ul>
    </>

}

export default RadioButton;