import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import GetSvg from 'shared/components/GetSvg';

import s from './ModalWindow.module.css';


const modalRoot = document.querySelector('#modal-root');

interface ModalWindowProps {
    children: ReactNode;
}

const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
    return createPortal(
        <div className={s.modalBackDrop}>
            <div className={s.modalContent}>
                {children}
                <button type='button' className={s.closeModalBtn}><GetSvg name='closeBtn' className={s.closeIcon} /></button>
            </div>
        </div>,
        modalRoot
    );
};

export default ModalWindow;

