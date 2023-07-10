import { FC, FormEventHandler } from 'react';

import LabelInput from "shared/components/LabelInput";
import Button from "shared/components/Button";

import s from './AddProductFormModal.module.css';

interface IAddProductFormModalProps {
    onSubmit?: FormEventHandler<HTMLFormElement>,
    onInput?: FormEventHandler<HTMLInputElement>
}

const AddProductFormModal: FC<IAddProductFormModalProps> = ({ onSubmit, onInput }) => {
    return <form className={s.addProductForm} onSubmit={onSubmit}>
        <div className={s.inputProductBlock}>
            <div className={s.inputProductWrapper}>
                <LabelInput type='text' name='productName' labelText="Enter product name" onInput={onInput} />
            </div>
            <div className={s.inputWeightWrapper}>
                <LabelInput type='text' name='weight' labelText="Grams" />
            </div>
            <Button type='submit' className={`${s.addProductBtn} buttonRectangle buttonActive`}>Add</Button>
        </div>
    </form>
}

export default AddProductFormModal;