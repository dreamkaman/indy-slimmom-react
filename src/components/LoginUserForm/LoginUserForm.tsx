import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from 'shared/components/Button/Button';
import LabelInput from 'shared/components/LabelInput/LabelInput';

import { showErrorMessage } from 'shared/tools/showErrorMessage/showErrorMessage';

import s from './LoginUserForm.module.css';

interface IFormData {
    email: string,
    password: string
}
const emailInputReq = {
    required: true,
    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}

const passwordInputReq = {
    required: true,
    minLength: 8,
    // eslint-disable-next-line no-useless-escape
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/
}



const LoginUserForm = () => {
    // const { register, formState: {
    //     error,
    // }, handleSubmit } = useForm();

    // const showErrorMessage = () => toast('Validation error!');

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm();

    const navigate = useNavigate();

    const handleSubmitLoginForm = (data: IFormData) => {
        console.log(data);
    }

    const handleRegistrationClick = () => {
        navigate('/register');
    };

    const handleLoginClick = () => {

        console.log(Object.keys(errors));
        if (Object.keys(errors).length) {
            console.log(errors);
            showErrorMessage('Validation error new!');
        }
    }

    return <form className={s.loginUserForm} onSubmit={handleSubmit(handleSubmitLoginForm)}>
        <h3 className={s.loginFormTitle}>Log in</h3>
        <div className={s.inputWrapper}>
            <LabelInput name='email' type='email' labelText='Email*' register={register} settings={emailInputReq} />
            <LabelInput name='password' type='password' labelText='Password*' register={register} settings={passwordInputReq} />
        </div>
        <div className={s.buttonWrapper}>
            <Button className={`${s.loginButton} ${s.button} buttonActive buttonRectangle`} type='submit' name='Login' onClick={handleLoginClick} />
            <Button className={`${s.registrationButton} ${s.button} buttonPassive buttonRectangle`} type='button' onClick={handleRegistrationClick} name='Register' />
        </div>
    </form>
}

export default LoginUserForm;