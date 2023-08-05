import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { isAuthSelector, userNameSelector } from 'redux/selectors/user';
import { logoutUserAction } from 'redux/actions/user/actionCreators';
import { showMessage } from 'shared/tools/showMessages';
import { showModalSelector } from 'redux/selectors/modal';
import { showModalAction } from 'redux/actions/modalWindow/actionCreator';

import s from './NicButton.module.css';


const NicButton = () => {
    const nic = useAppSelector(userNameSelector);
    const token = useAppSelector(isAuthSelector);
    const showModal = useAppSelector(showModalSelector);

    const dispatch = useAppDispatch();

    const handleClick = () => {
        try {
            dispatch(logoutUserAction(token));
            if (showModal) {
                dispatch(showModalAction())
            }
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