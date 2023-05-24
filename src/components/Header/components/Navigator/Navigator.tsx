import GetSvg from 'shared/components/GetSvg';
import NicButton from './components/NicButton'

import s from './Navigator.module.css';

const Navigator = () => {
    return <nav className={s.navigation}>
        <div className={s.navigationFlex}>
            <div className={s.navWrapper}>
                <GetSvg name={'slimMomTxt'} className={'logoTxt'} />
                <ul className={s.menu}>
                    <li className={s.menuItem}>Log in</li>
                    <li className={s.menuItem}>Registration</li>
                    <li className={s.menuItem}>Dairy</li>
                    <li className={s.menuItem}>Calculator</li>
                </ul>
            </div>
            <div className={s.rightNavWrapper}>
                <NicButton />
                <button className={s.burgerBtn}><GetSvg name={'burgerBtn'} className={'burgerSvg'} /></button>
            </div>
        </div>
    </nav>
}

export default Navigator;