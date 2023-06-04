import Button from "shared/components/Button/Button";
import LabelInput from "shared/components/LabelInput/LabelInput";

import s from './LoginUserForm.module.css';

const LoginUserForm = () => {
    const handleSubmitLoginForm = () => {
        alert('Form submit!');
    }

    const handleRegistrationClick = () => {
        alert('Button click!');
    };

    return <form onSubmit={handleSubmitLoginForm}>
        <h3 className={s.loginFormTitle}>Log in</h3>
        <div className={s.inputWrapper}>
            <LabelInput name='email' type='email' labelText="Email*" />
            <LabelInput name='password' type="password" labelText="Password*" />
        </div>
        <div className={s.buttonWrapper}>
            <Button className={`${s.loginButton} ${s.button} buttonRectangleActive`} type="submit" name="Login" />
            <Button className={`${s.registrationButton} ${s.button} buttonRectanglePassive`} type='button' onClick={handleRegistrationClick} name="Registration" />
        </div>
    </form>
}

export default LoginUserForm;