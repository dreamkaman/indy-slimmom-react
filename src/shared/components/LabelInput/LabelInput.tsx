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
    list?: string | null,
    labelHtmlFor: string;
    type: 'telephone' | 'email' | 'text' | 'password';
    labelText: string;
    onInput?: FormEventHandler<HTMLInputElement>,
    register?: UseFormRegister<FieldValues> | null;
    rules?: IRules | null;
}
const LabelInput: FC<ILabelInput> = ({ list = null, labelHtmlFor, type, labelText, register = null, rules = null, onInput }) => {
    return <div className={s.wrapper}>
        {register === null ?
            <input
                list={list}
                onInput={onInput}
                name={labelHtmlFor}
                type={type}
                placeholder='.' /> :
            <input
                list={list}
                onInput={onInput}
                type={type}
                placeholder='.'
                {...register(labelHtmlFor, rules)} />
        }
        <label htmlFor={labelHtmlFor}>{labelText}</label>
    </div >
}

export default LabelInput;