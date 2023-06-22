import { Link, NavLink } from 'react-router-dom';

import GetSvg from 'shared/components/GetSvg';
import NicButton from './components/NicButton'

import s from './Navigator.module.css';

const Navigator = () => {

    const isAuth = false;
    const showModal = false;

    return <nav className={s.navigation}>
        <div className={s.navWrapper}>
            <Link to='/'>
                <GetSvg name={'slimMomTxt'} className={'logoTxt'} />
            </Link>
            <ul className={s.menu}>
                {!isAuth && <li className={s.menuItem}><NavLink to='/login'>Log in</NavLink></li>}
                {!isAuth && <li className={s.menuItem}><NavLink to='/register'>Registration</NavLink></li>}
                {isAuth && <li className={`${s.menuItem} ${s.hideBurgerMenuItems}`}><NavLink to='/dairy'>Dairy</NavLink></li>}
                {isAuth && <li className={`${s.menuItem} ${s.hideBurgerMenuItems}`}><NavLink to='/calculator'>Calculator</NavLink></li>}
            </ul>
        </div>
        {isAuth && <div className={s.rightNavWrapper}>
            <div className={s.visible}>
                <NicButton />
            </div>
            {!showModal && <button className={s.burgerBtn}><GetSvg name={'burgerBtn'} className={'burgerSvg'} /></button>}
            {showModal && <button className={s.burgerBtn}><GetSvg name={'closeBtn'} className={'closeSvg'} /></button>}
        </div>}
    </nav>
}

export default Navigator;