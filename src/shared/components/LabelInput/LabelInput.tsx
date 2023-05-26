import { FC } from 'react';

import s from './LabelInput.module.css';

interface ILabelInput {
    name: string;
    type: 'telephone' | 'email' | 'text' | 'password';
    labelText: string;
}
const LabelInput: FC<ILabelInput> = ({ name, type, labelText }) => {
    return <div className={s.wrapper}>
        <input name={name} type={type} placeholder='.' />
        <label htmlFor={name}>{labelText}</label>
    </div >
}

export default LabelInput;