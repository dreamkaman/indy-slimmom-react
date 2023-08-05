import { FC, FormEventHandler } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "shared/components/Button";
import LabelInput from "shared/components/LabelInput";
import GetSvg from "shared/components/GetSvg";
import ProductsList from "./components/ProductsList";

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { filteredProductsSelector } from 'redux/selectors/productSearch';
import { productNameRules, productWeightRules } from 'shared/reactHookFormRules';
import { postEatenProductAction } from 'redux/actions/dayInfo/actionCreator';
import { isAuthSelector } from 'redux/selectors/user';

import s from './AddProductForm.module.css';
import { showMessage } from 'shared/tools/showMessages';
import { getCurrentDateSelector } from 'redux/selectors/dayInfo';
import { showModalSelector } from 'redux/selectors/modal';
import { showModalAction } from 'redux/actions/modalWindow/actionCreator';
import ModalWindow from 'shared/components/ModalWindow';
import AddProductFormModal from 'components/AddProductFormModal';


interface IAddProductFormProps {
    onInput?: FormEventHandler<HTMLInputElement>
}

interface Inputs {
    productName: string,
    weight: string
}

const AddProductForm: FC<IAddProductFormProps> = ({ onInput }) => {
    const { register, handleSubmit, reset } = useForm();

    const dispatch = useAppDispatch();

    const showModal = useAppSelector(showModalSelector);
    const filteredProducts = useAppSelector(filteredProductsSelector);
    const token = useAppSelector(isAuthSelector);
    const currentDate = useAppSelector(getCurrentDateSelector);

    const onSubmit: SubmitHandler<Inputs> = data => {
        try {
            const { _id: productId } = filteredProducts[0];
            const { weight } = data;

            const eatenProduct = { productId, weight: Number(weight), date: currentDate };

            dispatch(postEatenProductAction({ eatenProduct, token }));

            reset();

        } catch (error) {
            showMessage(error.message);
        }
    }

    const onPlusBtnClickHandler = () => {
        dispatch(showModalAction());
    }

    return <>
        <form className={s.addProductForm} onSubmit={handleSubmit(onSubmit)}>
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
                type='button'
                className={`${s.addProductBtn} ${s.bottomBtn} buttonCircle buttonActive`}
                onClick={onPlusBtnClickHandler}>
                <GetSvg
                    name="plusBtn"
                    className={s.plusIcon} />
            </Button>
        </form>
        {showModal && <ModalWindow>
            <AddProductFormModal />
        </ModalWindow>}
    </>
}

export default AddProductForm;