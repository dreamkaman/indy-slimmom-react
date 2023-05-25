import s from './Logo.module.css';

import logo from 'images/logo.png';

const Logo = () => {
    return <img src={logo} alt="logo" className={s.logoImage} />
}

export default Logo;