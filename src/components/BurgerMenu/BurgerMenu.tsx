import s from './BurgerMenu.module.css';

const BurgerMenu = () => {
    return <ul className={s.burgerMenuList}>
        <li className={s.burgerMenuListItem}>diary</li>
        <li className={s.burgerMenuListItem}>calculator</li>
    </ul>
}

export default BurgerMenu;