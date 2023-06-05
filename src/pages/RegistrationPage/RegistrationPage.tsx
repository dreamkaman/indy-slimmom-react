import RegisterUserForm from "components/RegisterUserForm";

import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
    return <section className={s.registerPageBg}>
        <div className="container">
            <div className={s.registrationUserFormWrapper}>
                <RegisterUserForm />
            </div>
        </div>
    </section>
}

export default RegistrationPage;