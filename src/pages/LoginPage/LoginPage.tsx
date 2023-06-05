import LoginUserForm from "components/LoginUserForm";

import s from './LoginPage.module.css';

const LoginPage = () => {
    return <section className={s.loginPageBg}>
        <div className="container">
            <div className={s.loginFormWrapper}>
                <LoginUserForm />
            </div>
        </div>
    </section>
}

export default LoginPage;