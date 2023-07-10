import { FC, FormEventHandler } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import s from './LabelInput.module.css';

interface IRules {
    required?: string | boolean;
    minLength?: {
        value: number;
        message: string
    } | number;
    maxLength?: {
        value: number;
        message: string
    } | number;
    pattern?: {
        value: RegExp;
        message: string
    };
    validate?: (value: string) => boolean | string;
}

interface ILabelInput {
    name: string;
    type: 'telephone' | 'email' | 'text' | 'password';
    labelText: string;
    onInput?: FormEventHandler<HTMLInputElement>,
    register?: UseFormRegister<FieldValues> | null;
    rules?: IRules | null;
}
const LabelInput: FC<ILabelInput> = ({ name, type, labelText, register = null, rules = null, onInput }) => {
    return <div className={s.wrapper}>
        {register === null ?
            <input
                onInput={onInput}
                name={name}
                type={type}
                placeholder='.' /> :
            <input
                onInput={onInput}
                type={type}
                placeholder='.'
                {...register(name, rules)} />
        }
        <label htmlFor={name}>{labelText}</label>
    </div >
}

export default LabelInput;