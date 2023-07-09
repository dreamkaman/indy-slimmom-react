import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import LabelInput from 'shared/components/LabelInput';
import Button from 'shared/components/Button/Button';

import {
    nameRegisterRules,
    emailRegisterRules,
    passwordRegisterRules
} from 'shared/reactHookFormRules';
import { checkError } from 'shared/tools/checkError';
import { registerUserAction } from 'redux/actions/user/actionCreators';
import { useAppDispatch } from 'redux/hooks';

import s from './RegisterUserForm.module.css';



interface FormData {
    username: string,
    email: string,
    password: string,
    repeatedPassword: string
}


const RegisterUserForm = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()


    const handleSubmitRegistrationForm = (data: FormData) => {
        try {
            const { username, email, password } = data;
            dispatch(registerUserAction({ username, email, password }));
            navigate('/login');
        } catch (error) {
            console.log(error);
        }

    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        checkError(errors);
    }


    return <form className={s.registrationForm} onSubmit={handleSubmit(handleSubmitRegistrationForm)}>
        <h3 className={s.registrationFormTitle}>Register</h3>
        <div className={s.inputWrapper}>
            <LabelInput name='username' type='text' labelText="Name*" register={register} rules={nameRegisterRules} />
            <LabelInput name='email' type='email' labelText="Email*" register={register} rules={emailRegisterRules} />
            <LabelInput name='password' type="password" labelText="Password*" register={register} rules={passwordRegisterRules} />
            <LabelInput name='repeatedPassword' type="password" labelText="Repeat Password*" register={register} rules={passwordRegisterRules} />
        </div>
        <div className={s.buttonWrapper}>
            <Button className={`${s.registrationButton} ${s.button} buttonActive buttonRectangle`} type='submit' name="Register" onClick={handleRegisterClick} />
            <Button className={`${s.loginButton} ${s.button} buttonPassive buttonRectangle`} type="button" name="Login" onClick={handleLoginClick} />
        </div>
    </form>
}

export default RegisterUserForm;