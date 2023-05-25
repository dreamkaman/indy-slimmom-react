import GetSvg from 'shared/components/GetSvg';
import NicButton from './components/NicButton'

import s from './Navigator.module.css';

const Navigator = () => {

    const isLogined = true;

    return <nav className={s.navigation}>
        <div className={s.navWrapper}>
            <GetSvg name={'slimMomTxt'} className={'logoTxt'} />
            <ul className={s.menu}>
                {!isLogined && <li className={s.menuItem}>Log in</li>}
                {!isLogined && <li className={s.menuItem}>Registration</li>}
                {isLogined && <li className={s.menuItem}>Dairy</li>}
                {isLogined && <li className={s.menuItem}>Calculator</li>}
            </ul>
        </div>
        {isLogined && <div className={s.rightNavWrapper}>
            <NicButton />
            <button className={s.burgerBtn}><GetSvg name={'burgerBtn'} className={'burgerSvg'} /></button>
        </div>}
    </nav>
}

export default Navigator;