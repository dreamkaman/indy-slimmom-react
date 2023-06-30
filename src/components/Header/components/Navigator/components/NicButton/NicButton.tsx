import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/hooks';

import { isAuthSelector, userNameSelector } from 'redux/selectors/auth';

import s from './NicButton.module.css';
import { logoutUserAction } from 'redux/actions/auth/actionCreators';

const NicButton = () => {
    const nic = useSelector(userNameSelector);
    const token = useSelector(isAuthSelector);

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(logoutUserAction(token));
    }
    return <ul className={s.wrapper}>
        <li className={`${s.item} ${s.nic}`}>{nic}</li>
        <li className={`${s.item} ${s.exitBtn}`} onClick={handleClick}>Exit</li>
    </ul>
}

export default NicButton;