import { useForm } from 'react-hook-form';

import LabelInput from "shared/components/LabelInput";
import Button from "shared/components/Button/Button";

import s from './CalculateCaloriesForm.module.css';
import RadioButton from "shared/components/RadioButton/RadioButton";
import { checkError } from 'shared/tools/checkError';
import { IDailyRateRequest, getDailyRate } from 'API';
import { showErrorMessage } from 'shared/tools/showMessages';
import {
    ageRules,
    bloodRules,
    currentWeightRules,
    desiredWeightRules,
    heightRules
} from 'shared/reactHookFormRules';
import { useLocation } from 'react-router-dom';


const CalculateCaloriesForm = () => {
    const location = useLocation();

    console.log(location);

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const handleCaloriesFormSubmit = async (data: IDailyRateRequest) => {
        if (location.pathname === '/') {
            try {
                const result = await getDailyRate(data);
                console.log('Result');

                console.log(result);
                reset();
            } catch (error) {
                showErrorMessage(error.message);
            }
        }

        if (location.pathname === '/calculator') {

        }

    }

    const handleStartLoosingWeightBtnClick = () => {
        checkError(errors);
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
                    name='weight'
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