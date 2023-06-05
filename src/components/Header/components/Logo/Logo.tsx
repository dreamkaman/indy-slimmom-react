import { NavLink } from 'react-router-dom';

import s from './Logo.module.css';

import logo from 'images/logo.png';

const Logo = () => {
    return <NavLink to='/'><img src={logo} alt="logo" className={s.logoImage} /></NavLink>
}

export default Logo;