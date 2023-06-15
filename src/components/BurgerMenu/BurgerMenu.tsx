import { Link } from 'react-router-dom';

import s from './BurgerMenu.module.css';

const BurgerMenu = ({ onClick }) => {
    return <ul className={s.burgerMenuList} onClick={onClick}>
        <li className={s.burgerMenuListItem}><Link to='/dairy'>dairy</Link></li>
        <li className={s.burgerMenuListItem}><Link to='/calculator'>calculator</Link></li>
    </ul>
}

export default BurgerMenu;