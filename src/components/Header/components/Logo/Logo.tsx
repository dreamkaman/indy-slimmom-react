import s from './Logo.module.css';

const Logo = () => {
    return <div className={s.logoWrapper}>
        <img src="../../../../images/logo.png" alt="logo" />
    </div>
}

export default Logo;