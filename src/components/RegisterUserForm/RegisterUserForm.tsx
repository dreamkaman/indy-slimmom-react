import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import LabelInput from 'shared/components/LabelInput';
import Button from 'shared/components/Button/Button';

import { nameRules, emailRules, passwordRules } from 'shared/reactHookFormRules';
import { validation } from 'shared/tools/validation';

import s from './RegisterUserForm.module.css';


interface FormData {
    name: string,
    email: string,
    password: string,
    repeatedPassword: string
}


const RegisterUserForm = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()


    const handleSubmitRegistrationForm = (data: FormData) => {
        console.log(data);
        console.log(errors)
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        validation(errors);
    }



    return <form className={s.registrationForm} onSubmit={handleSubmit(handleSubmitRegistrationForm)}>
        <h3 className={s.registrationFormTitle}>Register</h3>
        <div className={s.inputWrapper}>
            <LabelInput name='name' type='text' labelText="Name*" register={register} rules={nameRules} />
            <LabelInput name='email' type='email' labelText="Email*" register={register} rules={emailRules} />
            <LabelInput name='password' type="password" labelText="Password*" register={register} rules={passwordRules} />
            <LabelInput name='repeatedPassword' type="password" labelText="Repeat Password*" register={register} rules={passwordRules} />
        </div>
        <div className={s.buttonWrapper}>
            <Button className={`${s.registrationButton} ${s.button} buttonActive buttonRectangle`} type='submit' name="Register" onClick={handleRegisterClick} />
            <Button className={`${s.loginButton} ${s.button} buttonPassive buttonRectangle`} type="button" name="Login" onClick={handleLoginClick} />
        </div>
    </form>
}

export default RegisterUserForm;