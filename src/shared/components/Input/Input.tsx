import { FC } from 'react';

import s from './Input.module.css';

interface IInput {
    name: string;
    type: 'telephone' | 'email' | 'text' | 'password';
    labelText: string;
}
const Input: FC<IInput> = ({ name, type, labelText }) => {
    return <div className={s.wrapper}>
        <input name={name} type={type} />
        <label>{labelText}</label>
    </div >
}

export default Input;