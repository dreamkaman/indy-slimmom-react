import { Link } from 'react-router-dom';

import s from './BurgerMenu.module.css';

const BurgerMenu = ({ onClick }) => {
    return <ul className={s.burgerMenuList} >
        <li className={s.burgerMenuListItem} onClick={onClick}><Link to='/dairy'>dairy</Link></li>
        <li className={s.burgerMenuListItem} onClick={onClick}><Link to='/calculator'>calculator</Link></li>
    </ul>
}

export default BurgerMenu;