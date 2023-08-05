import { Link, NavLink } from 'react-router-dom';

import GetSvg from 'shared/components/GetSvg';
import NicButton from './components/NicButton';
import BurgerMenu from 'components/BurgerMenu';

import { isAuthSelector, userDailyRateSelector } from 'redux/selectors/user';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getShowBurgerMenuSelector } from 'redux/selectors/burgerMenu';
import { showBurgerMenuAction } from 'redux/actions/burgerMenu/actionsCreator';

import s from './Navigator.module.css';




const Navigator = () => {
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector(isAuthSelector);
    const showBurgerMenu = useAppSelector(getShowBurgerMenuSelector);
    const userDairyRate = useAppSelector(userDailyRateSelector);

    const clickBurgerMenuHandle = () => {
        dispatch(showBurgerMenuAction());
    };



    return <nav className={s.navigation}>
        <div className={s.navWrapper}>
            <Link to='/'>
                <GetSvg name={'slimMomTxt'} className={'logoTxt'} />
            </Link>
            <ul className={s.menu}>
                {!isAuth && <li className={s.menuItem}><NavLink to='/login'>Log in</NavLink></li>}
                {!isAuth && <li className={s.menuItem}><NavLink to='/register'>Registration</NavLink></li>}
                {isAuth && !!userDairyRate && <li className={`${s.menuItem} ${s.hideBurgerMenuItems}`}><NavLink to='/dairy'>Dairy</NavLink></li>}
                {isAuth && <li className={`${s.menuItem} ${s.hideBurgerMenuItems}`}><NavLink to='/calculator'>Calculator</NavLink></li>}
            </ul>
        </div>
        {isAuth && <div className={s.rightNavWrapper}>
            <div className={s.visible}>
                <NicButton />
            </div>
            {!showBurgerMenu && <button className={s.burgerBtn} onClick={clickBurgerMenuHandle}><GetSvg name={'burgerBtn'} className={'burgerSvg'} /></button>}
            {showBurgerMenu && <button className={s.burgerBtn} onClick={clickBurgerMenuHandle}><GetSvg name={'closeBtn'} className={'closeSvg'} /></button>}
        </div>}
        {showBurgerMenu && <BurgerMenu />}
    </nav>
}

export default Navigator;