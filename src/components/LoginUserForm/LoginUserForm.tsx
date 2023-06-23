import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from 'shared/components/Button/Button';
import LabelInput from 'shared/components/LabelInput/LabelInput';

// import { showErrorMessage } from 'shared/tools/showMessages';

import { emailRules, passwordRules } from 'shared/reactHookFormRules';
import { validation } from 'shared/tools/validation';

import s from './LoginUserForm.module.css';

interface IFormData {
    email: string,
    password: string
}

const LoginUserForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();

    const navigate = useNavigate();

    const handleSubmitLoginForm = (data: IFormData) => {
        console.log(data);
        reset();
    }

    const handleRegistrationClick = () => {
        navigate('/register');
    };

    const handleLoginClick = () => {
        validation(errors);
    }

    return <form className={s.loginUserForm} onSubmit={handleSubmit(handleSubmitLoginForm)}>
        <h3 className={s.loginFormTitle}>Log in</h3>
        <div className={s.inputWrapper}>
            <LabelInput name='email' type='email' labelText='Email*' register={register} rules={emailRules} />
            <LabelInput name='password' type='password' labelText='Password*' register={register} rules={passwordRules} />
        </div>
        <div className={s.buttonWrapper}>
            <Button className={`${s.loginButton} ${s.button} buttonActive buttonRectangle`} type='submit' name='Login' onClick={handleLoginClick} />
            <Button className={`${s.registrationButton} ${s.button} buttonPassive buttonRectangle`} type='button' onClick={handleRegistrationClick} name='Register' />
        </div>
    </form>
}

export default LoginUserForm;