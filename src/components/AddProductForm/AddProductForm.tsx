import { FC, FormEventHandler } from 'react';

import Button from "shared/components/Button";
import LabelInput from "shared/components/LabelInput";
import GetSvg from "shared/components/GetSvg";
import ProductsList from "./components/ProductsList";

import s from './AddProductForm.module.css';

interface IAddProductFormProps {
    onClick?: (e?: MouseEvent) => void,
    onInput?: FormEventHandler<HTMLInputElement>
}

const AddProductForm: FC<IAddProductFormProps> = ({ onClick, onInput }) => {
    return <form className={s.addProductForm}>
        <div className={s.inputProductBlock}>
            <div className={s.inputProductWrapper}>
                <LabelInput
                    type='text'
                    name='productName'
                    labelText="Enter product name"
                    onInput={onInput} />
            </div>
            <div className={s.inputWeightWrapper}>
                <LabelInput
                    type='text'
                    name='weight'
                    labelText="Grams" />
            </div>
            <Button
                className={`${s.addProductBtn} ${s.topBtn} buttonCircle buttonActive`}
                type={'button'}>
                <GetSvg name="plusBtn" className={s.plusIcon} />
            </Button>
        </div>

        <ProductsList />

        <Button type={"submit"} className={`${s.addProductBtn} ${s.bottomBtn} buttonCircle buttonActive`} onClick={onClick}><GetSvg name="plusBtn" className={s.plusIcon} /></Button>
    </form>
}

export default AddProductForm;