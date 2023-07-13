import { FC, FormEventHandler } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "shared/components/Button";
import LabelInput from "shared/components/LabelInput";
import GetSvg from "shared/components/GetSvg";
import ProductsList from "./components/ProductsList";

import { useAppSelector } from 'redux/hooks';
import { filteredProductsSelector } from 'redux/selectors/productSearch';
import { productNameRules, productWeightRules } from 'shared/reactHookFormRules';

import s from './AddProductForm.module.css';


interface IAddProductFormProps {
    onClick?: (e?: MouseEvent) => void,
    onInput?: FormEventHandler<HTMLInputElement>
}

interface Inputs {
    productName: string,
    weight: string
}

const AddProductForm: FC<IAddProductFormProps> = ({ onClick, onInput }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const filteredProducts = useAppSelector(filteredProductsSelector);

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        console.log(errors);
    }

    return <form className={s.addProductForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputProductBlock}>
            <div className={s.inputProductWrapper}>
                <LabelInput
                    listName='chooseProductName'
                    type='text'
                    labelHtmlFor='productName'
                    labelText="Enter product name"
                    optionsArray={filteredProducts}
                    onInput={onInput}
                    register={register}
                    rules={productNameRules}
                />
            </div>
            <div className={s.inputWeightWrapper}>
                <LabelInput
                    type='text'
                    labelHtmlFor='weight'
                    labelText="Grams"
                    register={register}
                    rules={productWeightRules}
                />
            </div>
            <Button
                className={`${s.addProductBtn} ${s.topBtn} buttonCircle buttonActive`}
                type='submit'>
                <GetSvg name="plusBtn" className={s.plusIcon} />
            </Button>
        </div>

        <ProductsList />

        <Button
            type='submit'
            className={`${s.addProductBtn} ${s.bottomBtn} buttonCircle buttonActive`}
            onClick={onClick}>
            <GetSvg
                name="plusBtn"
                className={s.plusIcon} />
        </Button>
    </form>
}

export default AddProductForm;