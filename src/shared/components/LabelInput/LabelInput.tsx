import { FC, FormEventHandler } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import s from './LabelInput.module.css';
import { IProductItem } from 'API';

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
    listName?: string | null,
    labelHtmlFor: string,
    type: 'telephone' | 'email' | 'text' | 'password',
    labelText: string,
    onInput?: FormEventHandler<HTMLInputElement>,
    register?: UseFormRegister<FieldValues> | null,
    rules?: IRules | null,
    optionsArray?: IProductItem[]
}
const LabelInput: FC<ILabelInput> = ({
    listName = null,
    labelHtmlFor,
    type,
    labelText,
    register = null,
    rules = null,
    onInput,
    optionsArray = [] }) => {
    return <div className={s.wrapper}>
        {register === null ?
            <input
                id={labelHtmlFor}
                list={listName}
                onInput={onInput}
                name={labelHtmlFor}
                type={type}
                placeholder='.' /> :
            <input
                id={labelHtmlFor}
                list={listName}
                onInput={onInput}
                type={type}
                placeholder='.'
                {...register(labelHtmlFor, rules)} />
        }
        <label htmlFor={labelHtmlFor}>{labelText}</label>
        {!!listName && <datalist id={listName}>
            {optionsArray.length && optionsArray.map((optionItem) => {
                return <option key={optionItem._id} value={optionItem.title.en}>
                    {optionItem.title.en}
                </option>
            })}
        </datalist>}
    </div >
}

export default LabelInput;