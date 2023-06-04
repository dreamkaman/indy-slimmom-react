import LoginUserForm from "components/LoginUserForm";

import s from './LoginPage.module.css';

const LoginPage = () => {
    return <section className="container">
        <div className={s.loginFormWrapper}>
            <LoginUserForm />
        </div>
    </section>
}

export default LoginPage;