import s from './Logo.module.css';

import logo from 'images/logo.png';

const Logo = () => {
    return <div className={s.logoWrapper}>
        <img src={logo} alt="logo" />
    </div>
}

export default Logo;