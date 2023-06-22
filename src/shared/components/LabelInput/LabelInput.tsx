import { FC } from 'react';
import { useForm } from 'react-hook-form';

import s from './LabelInput.module.css';


interface ILabelInput {
    name: string;
    type: 'telephone' | 'email' | 'text' | 'password';
    labelText: string;
    register?: ReturnType<typeof useForm>['register'] | null;
    settings?: object | null;
}
const LabelInput: FC<ILabelInput> = ({ name, type, labelText, register = null, settings = null }) => {
    return <div className={s.wrapper}>
        {register === null ?
            <input name={name} type={type} placeholder='.' /> :
            <input
                // name={name}
                type={type}
                placeholder='.'
                {...register(name, { ...settings })} />
        }
        {/* {register && <input name={name} type={type} placeholder='.' />} */}
        <label htmlFor={name}>{labelText}</label>
    </div >
}

export default LabelInput;