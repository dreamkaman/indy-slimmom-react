import { useForm } from 'react-hook-form';

import LabelInput from "shared/components/LabelInput";
import Button from "shared/components/Button/Button";

import s from './CalculateCaloriesForm.module.css';
import RadioButton from "shared/components/RadioButton/RadioButton";
import { validation } from 'shared/tools/validation';


const CalculateCaloriesForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCaloriesFormSubmit: React.FormEventHandler<HTMLFormElement> = (data) => {
        // e.preventDefault();
        console.log(data);
    }

    const heightRules = {
        required: true,
    }
    const ageRules = {
        required: true,
    }
    const currentWeightRules = {
        required: true,
    }
    const desiredWeightRules = {
        required: true,
    }

    const bloodRules = {
        required: true,
    }

    const handleStartLoosingWeightBtnClick = () => {
        validation(errors);
    }

    return <form
        className={s.calculateCaloriesForm}
        onSubmit={handleSubmit(handleCaloriesFormSubmit)}>
        <h2 className={s.title}>Calculate your daily calorie intake right now</h2>
        <div className={s.formFlexBox}>
            <div className={s.formLeftSubFlexWrapper}>
                <LabelInput
                    name='height'
                    type='text'
                    labelText="Height*"
                    register={register}
                    rules={heightRules} />
                <LabelInput
                    name='age'
                    type='text'
                    labelText="Age*"
                    register={register}
                    rules={ageRules} />
                <LabelInput
                    name='currentWeight'
                    type='text'
                    labelText="Current weight*"
                    register={register}
                    rules={currentWeightRules} />
            </div>
            <div className={s.formRightSubFlexWrapper}>
                <LabelInput
                    name='desiredWeight'
                    type='text'
                    labelText="Desired weight*"
                    register={register}
                    rules={desiredWeightRules} />
                <RadioButton
                    register={register}
                    rules={bloodRules} />
            </div>
        </div>
        <Button
            name={'Start losing weight'}
            type='submit'
            className={`${s.startLoosingWeightBtn} buttonActive buttonRectangle`}
            onClick={handleStartLoosingWeightBtnClick} />






    </form>
}

export default CalculateCaloriesForm;