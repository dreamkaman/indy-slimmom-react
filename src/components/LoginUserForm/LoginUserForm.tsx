import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from 'shared/components/Button/Button';
import LabelInput from 'shared/components/LabelInput/LabelInput';

import { emailLoginRules, passwordLoginRules } from 'shared/reactHookFormRules';
import { checkError } from 'shared/tools/checkError';

import s from './LoginUserForm.module.css';
import { useAppDispatch } from 'redux/hooks';
import { loginUserAction } from 'redux/actions/user/actionCreators';


export interface IFormData {
    email: string,
    password: string
}

const LoginUserForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleSubmitLoginForm = (data: IFormData) => {
        dispatch(loginUserAction(data));
    }

    const handleRegistrationClick = () => {
        navigate('/register');
    };

    const handleLoginClick = () => {
        checkError(errors);
    }

    return <form className={s.loginUserForm} onSubmit={handleSubmit(handleSubmitLoginForm)}>
        <h3 className={s.loginFormTitle}>Log in</h3>
        <div className={s.inputWrapper}>
            <LabelInput labelHtmlFor='email' type='email' labelText='Email*' register={register} rules={emailLoginRules} />
            <LabelInput labelHtmlFor='password' type='password' labelText='Password*' register={register} rules={passwordLoginRules} />
        </div>
        <div className={s.buttonWrapper}>
            <Button className={`${s.button} buttonActive buttonRectangle`} type='submit' name='Login' onClick={handleLoginClick} />
            <Button className={`${s.button} buttonPassive buttonRectangle`} type='button' onClick={handleRegistrationClick} name='Register' />
        </div>
    </form>
}

export default LoginUserForm;