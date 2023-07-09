import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from 'shared/components/Button/Button';
import LabelInput from 'shared/components/LabelInput/LabelInput';

import { emailLoginRules, passwordLoginRules } from 'shared/reactHookFormRules';
import { checkError } from 'shared/tools/checkError';

import s from './LoginUserForm.module.css';
import { useAppDispatch } from 'redux/hooks';
import { loginUserAction } from 'redux/actions/user/actionCreators';
import { showMessage } from 'shared/tools/showMessages';


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
        try {
            dispatch(loginUserAction(data));
            showMessage('The user has successfully logged in!', 'success');
        } catch (error) {
            showMessage(error.message);
        }
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
            <LabelInput name='email' type='email' labelText='Email*' register={register} rules={emailLoginRules} />
            <LabelInput name='password' type='password' labelText='Password*' register={register} rules={passwordLoginRules} />
        </div>
        <div className={s.buttonWrapper}>
            <Button className={`${s.loginButton} ${s.button} buttonActive buttonRectangle`} type='submit' name='Login' onClick={handleLoginClick} />
            <Button className={`${s.registrationButton} ${s.button} buttonPassive buttonRectangle`} type='button' onClick={handleRegistrationClick} name='Register' />
        </div>
    </form>
}

export default LoginUserForm;