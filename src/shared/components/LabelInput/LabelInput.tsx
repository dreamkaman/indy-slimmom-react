import { FC } from 'react';

import { ILabelInput } from 'types';

import s from './LabelInput.module.css';



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