import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'redux/hooks';
import { showBurgerMenuAction } from 'redux/actions/burgerMenu/actionsCreator';

import s from './BurgerMenu.module.css';


const BurgerMenu = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onDairyClickHandle = () => {
        dispatch(showBurgerMenuAction());
        navigate('/dairy');
    }

    const onCalculatorClickHandle = () => {
        dispatch(showBurgerMenuAction());
        navigate('/calculator');
    }

    return <ul className={s.burgerMenuList} >
        <li className={s.burgerMenuListItem} onClick={onDairyClickHandle}><Link to='/dairy'>dairy</Link></li>
        <li className={s.burgerMenuListItem} onClick={onCalculatorClickHandle}><Link to='/calculator'>calculator</Link></li>
    </ul>
}

export default BurgerMenu;