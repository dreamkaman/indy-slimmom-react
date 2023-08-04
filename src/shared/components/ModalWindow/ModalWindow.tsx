import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch } from 'redux/hooks';

import GetSvg from 'shared/components/GetSvg';

import { showModalAction } from 'redux/actions/modalWindow/actionCreator';

import s from './ModalWindow.module.css';


const modalRoot = document.querySelector('#modal-root');

interface ModalWindowProps {
    children: ReactNode;
}

const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    const handleCloseModalBtnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(showModalAction());
    }

    const handleModalBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(showModalAction());
        }
    }

    return createPortal(
        <div className={s.modalBackDrop} onClick={handleModalBackdropClick}>
            <div className={s.modalContent}>
                {children}
                <button type='button' className={s.closeModalBtn} onClick={handleCloseModalBtnClick}><GetSvg name='closeBtn' className={s.closeIcon} /></button>
            </div>
        </div>,
        modalRoot
    );
};

export default ModalWindow;

