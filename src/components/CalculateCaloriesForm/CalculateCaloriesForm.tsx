import { useForm } from 'react-hook-form';

import LabelInput from "shared/components/LabelInput";
import Button from "shared/components/Button/Button";
import RadioButton from "shared/components/RadioButton/RadioButton";

import { checkError } from 'shared/tools/checkError';
import { showMessage } from 'shared/tools/showMessages';
import {
    ageRules,
    bloodRules,
    currentWeightRules,
    desiredWeightRules,
    heightRules
} from 'shared/reactHookFormRules';
import { isAuthSelector, userIdSelector } from 'redux/selectors/user';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
    getUserDailyRateAction,
    postUserDailyRateAction
} from 'redux/actions/user/actionCreators';

import { getCurrentDateSelector } from 'redux/selectors/dayInfo';
import { IDailyRateRequest } from 'types';

import s from './CalculateCaloriesForm.module.css';





const CalculateCaloriesForm = () => {
    const dispatch = useAppDispatch();

    const id = useAppSelector(userIdSelector);
    const token = useAppSelector(isAuthSelector);
    const currentDate = useAppSelector(getCurrentDateSelector);

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const handleCaloriesFormSubmit = (data: IDailyRateRequest) => {
        const { height, weight, desiredWeight, bloodType, age } = data;
        const newData = {
            height: Number(height),
            weight: Number(weight),
            desiredWeight: Number(desiredWeight),
            bloodType: Number(bloodType),
            age: Number(age)

        }
        if (!id) {
            try {
                dispatch(getUserDailyRateAction(newData));
                reset();
                showMessage('Please, Login or Register!', 'success');
            } catch (error) {
                showMessage(error.message);
            }
        } else {
            try {
                dispatch(postUserDailyRateAction({ request: newData, userId: id, token, currentDate }));
                reset();
            } catch (error) {
                showMessage(error.message);
            }
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
                    labelHtmlFor='height'
                    type='text'
                    labelText="Height*"
                    register={register}
                    rules={heightRules} />
                <LabelInput
                    labelHtmlFor='age'
                    type='text'
                    labelText="Age*"
                    register={register}
                    rules={ageRules} />
                <LabelInput
                    labelHtmlFor='weight'
                    type='text'
                    labelText="Current weight*"
                    register={register}
                    rules={currentWeightRules} />
            </div>
            <div className={s.formRightSubFlexWrapper}>
                <LabelInput
                    labelHtmlFor='desiredWeight'
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