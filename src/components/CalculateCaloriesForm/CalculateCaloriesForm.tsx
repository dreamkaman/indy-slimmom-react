import LabelInput from "shared/components/LabelInput";
import Button from "shared/components/Button/Button";

import s from './CalculateCaloriesForm.module.css';
import RadioButton from "shared/components/RadioButton/RadioButton";


const CalculateCaloriesForm = () => {

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    }

    return <form className={s.calculateCaloriesForm} onSubmit={handleSubmit}>
        <h2 className={s.title}>Calculate your daily calorie intake right now</h2>
        <div className={s.formFlexBox}>
            <div className={s.formLeftSubFlexWrapper}>
                <LabelInput name='height' type='text' labelText="Height*" />
                <LabelInput name='age' type='text' labelText="Age*" />
                <LabelInput name='currentWeight' type='text' labelText="Current weight*" />
            </div>
            <div className={s.formRightSubFlexWrapper}>
                <LabelInput name='desiredWeight' type='text' labelText="Desired weight*" />
                <RadioButton />
            </div>
        </div>
        <Button name={'Start losing weight'} type='submit' className={`${s.startLoosingWeightBtn} buttonRectangleActive`} />




    </form>
}

export default CalculateCaloriesForm;