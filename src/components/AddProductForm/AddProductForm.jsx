import Button from "shared/components/Button";
import LabelInput from "shared/components/LabelInput";
import GetSvg from "shared/components/GetSvg";
import ProductsList from "./components/ProductsList";

import s from './AddProductForm.module.css';

const AddProductForm = () => {
    return <form className={s.addProductForm}>
        <div className={s.inputProductBlock}>
            <div className={s.inputProductWrapper}>
                <LabelInput type='text' name='productName' labelText="Enter product name" />
            </div>
            <div className={s.inputWeightWrapper}>
                <LabelInput type='text' name='weight' labelText="Grams" />
            </div>
            <Button className={`${s.addProductBtn} ${s.topBtn} buttonCircle buttonActive`}><GetSvg name="plusBtn" className={s.plusIcon} /></Button>
        </div>

        <ProductsList />

        <Button className={`${s.addProductBtn} ${s.bottomBtn} buttonCircle buttonActive`}><GetSvg name="plusBtn" className={s.plusIcon} /></Button>
    </form>
}

export default AddProductForm;