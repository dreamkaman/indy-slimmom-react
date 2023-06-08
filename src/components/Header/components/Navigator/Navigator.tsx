import { Link, NavLink } from 'react-router-dom';

import GetSvg from 'shared/components/GetSvg';
import NicButton from './components/NicButton'

import s from './Navigator.module.css';

const Navigator = () => {

    const isAuth = true;

    return <nav className={s.navigation}>
        <div className={s.navWrapper}>
            <Link to='/'>
                <GetSvg name={'slimMomTxt'} className={'logoTxt'} />
            </Link>
            <ul className={s.menu}>
                {!isAuth && <li className={s.menuItem}><NavLink to='/login'>Log in</NavLink></li>}
                {!isAuth && <li className={s.menuItem}><NavLink to='/register'>Registration</NavLink></li>}
                {isAuth && <li className={s.menuItem}><NavLink to='/dairy'>Dairy</NavLink></li>}
                {isAuth && <li className={s.menuItem}><NavLink to='/calculator'>Calculator</NavLink></li>}
            </ul>
        </div>
        {isAuth && <div className={s.rightNavWrapper}>
            <NicButton />
            <button className={s.burgerBtn}><GetSvg name={'burgerBtn'} className={'burgerSvg'} /></button>
        </div>}
    </nav>
}

export default Navigator;