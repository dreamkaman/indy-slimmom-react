import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/hooks';

import { isAuthSelector, userNameSelector } from 'redux/selectors/user';

import s from './NicButton.module.css';
import { logoutUserAction } from 'redux/actions/user/actionCreators';
import { showMessage } from 'shared/tools/showMessages';

const NicButton = () => {
    const nic = useSelector(userNameSelector);
    const token = useSelector(isAuthSelector);

    const dispatch = useAppDispatch();

    const handleClick = () => {
        try {
            dispatch(logoutUserAction(token));
            showMessage('The user has successfully logged out!', 'success');
        } catch (error) {
            showMessage(error.message);
        }

    }
    return <ul className={s.wrapper}>
        <li className={`${s.item} ${s.nic}`}>{nic}</li>
        <li className={`${s.item} ${s.exitBtn}`} onClick={handleClick}>Exit</li>
    </ul>
}

export default NicButton;