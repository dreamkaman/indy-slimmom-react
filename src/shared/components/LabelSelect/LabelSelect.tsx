import { IProductItem } from 'API';
import { FC, FormEventHandler } from 'react';

interface ILabelSelectProps {
    list: string,
    labelHtmlFor: string,
    labelText: string,
    optionsArray: IProductItem[],
    onInput: FormEventHandler<HTMLInputElement>

}

const LabelSelect: FC<ILabelSelectProps> = ({ list, labelHtmlFor, labelText, optionsArray = [], onInput }) => {
    console.log(labelHtmlFor);
    return <>
        <label htmlFor={labelHtmlFor}>{labelText}</label>
        <input list={list} id={labelHtmlFor} name={labelHtmlFor} onInput={onInput} />
        <datalist id={list}>
            {optionsArray.length && optionsArray.map((optionItem) => {
                return <option key={optionItem._id} value={optionItem.title.ua}>{optionItem.title.ua}</option>
            })}
        </datalist>
    </>
}

export default LabelSelect;