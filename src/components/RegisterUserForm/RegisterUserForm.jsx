import { useNavigate } from 'react-router-dom';

import LabelInput from 'shared/components/LabelInput';
import Button from 'shared/components/Button/Button';

import s from './RegisterUserForm.module.css';

const RegisterUserForm = () => {
    const navigate = useNavigate();

    const handleSubmitRegistrationForm = () => { };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return <form className={s.registrationForm} onSubmit={handleSubmitRegistrationForm}>
        <h3 className={s.registrationFormTitle}>Register</h3>
        <div className={s.inputWrapper}>
            <LabelInput name='name' type='text' labelText="Name*" />
            <LabelInput name='email' type='email' labelText="Email*" />
            <LabelInput name='password' type="password" labelText="Password*" />
            <LabelInput name='repeatedPassword' type="password" labelText="Repeat Password*" />
        </div>
        <div className={s.buttonWrapper}>
            <Button className={`${s.registrationButton} ${s.button} buttonRectangleActive`} type='submit' name="Register" />
            <Button className={`${s.loginButton} ${s.button} buttonRectanglePassive`} type="button" name="Login" onClick={handleLoginClick} />
        </div>
    </form>
}

export default RegisterUserForm;