import RegisterUserForm from "components/RegisterUserForm/RegisterUserForm";
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
    return <section className="container">
        <div className={s.registrationUserFormWrapper}>
            <RegisterUserForm />
        </div>

    </section>
}

export default RegistrationPage;