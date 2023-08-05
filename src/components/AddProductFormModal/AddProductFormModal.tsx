import { FC, FormEventHandler } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import LabelInput from "shared/components/LabelInput";
import Button from "shared/components/Button";

import s from './AddProductFormModal.module.css';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { showModalAction } from 'redux/actions/modalWindow/actionCreator';
import { postEatenProductAction } from 'redux/actions/dayInfo/actionCreator';
import { isAuthSelector } from 'redux/selectors/user';
import { getCurrentDateSelector } from 'redux/selectors/dayInfo';
import { filteredProductsSelector } from 'redux/selectors/productSearch';
// import { postEatenProductAction } from 'redux/actions/dayInfo/actionCreator';

interface IAddProductFormModalProps {
    onInput?: FormEventHandler<HTMLInputElement>
}

interface Inputs {
    productName: string,
    weight: number
}

const AddProductFormModal: FC<IAddProductFormModalProps> = ({ onInput }) => {
    const { handleSubmit, register } = useForm<FieldValues>();

    const dispatch = useAppDispatch();

    const token = useAppSelector(isAuthSelector);

    const currentDate = useAppSelector(getCurrentDateSelector);

    const filteredProducts = useAppSelector(filteredProductsSelector);

    const onAddProductSubmitHandler: SubmitHandler<Inputs> = (data) => {
        try {
            const { productName, weight } = data;

            const productId = filteredProducts.find(product => product.title.en === productName)._id;

            dispatch(postEatenProductAction({
                eatenProduct: {
                    productId,
                    weight,
                    date: currentDate
                }, token
            }));

            dispatch(showModalAction());
        } catch (error) {

        }

    }
    return <form className={s.addProductForm} onSubmit={handleSubmit(onAddProductSubmitHandler)}>
        <div className={s.inputProductBlock}>
            <div className={s.inputProductWrapper}>
                <LabelInput
                    type='text'
                    labelHtmlFor='productName'
                    labelText="Enter product name"
                    register={register}
                    rules={{ required: true }}
                    onInput={onInput} />
            </div>
            <div className={s.inputWeightWrapper}>
                <LabelInput
                    type='text'
                    labelHtmlFor='weight'
                    labelText="Grams"
                    register={register}
                    rules={{ required: true }}
                />
            </div>
            <Button type='submit' className={`${s.addProductBtn} buttonRectangle buttonActive`}>Add</Button>
        </div>
    </form>
}

export default AddProductFormModal;