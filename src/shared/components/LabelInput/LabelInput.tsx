import { FC } from 'react';
import { useForm } from 'react-hook-form';

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
    register?: ReturnType<typeof useForm>['register'] | null;
    rules?: IRules | null;
}
const LabelInput: FC<ILabelInput> = ({ name, type, labelText, register = null, rules = null }) => {
    return <div className={s.wrapper}>
        {register === null ?
            <input
                name={name}
                type={type}
                placeholder='.' /> :
            <input
                type={type}
                placeholder='.'
                {...register(name, rules)} />
        }
        <label htmlFor={name}>{labelText}</label>
    </div >
}

export default LabelInput;