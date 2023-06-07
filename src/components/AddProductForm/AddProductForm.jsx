import Button from "shared/components/Button/Button";
import LabelInput from "shared/components/LabelInput/LabelInput";

import s from './AddProductForm.module.css';
import GetSvg from "shared/components/GetSvg/GetSvg";
import ProductsList from "./components/ProductsList/ProductsList";

const AddProductForm = () => {
    return <form className={s.addProductForm}>
        <div className={s.inputProductBlock}>
            <div className={s.inputProductWrapper}>
                <LabelInput type='text' name='productName' labelText="Enter product name" />
            </div>
            <div className={s.inputWeightWrapper}>
                <LabelInput type='text' name='weight' labelText="Grams" />
            </div>
            <Button className={`${s.addProductBtn} buttonCircle buttonActive`}><GetSvg name="plusBtn" className={s.plusIcon} /></Button>
        </div>

        <ProductsList />
    </form>
}

export default AddProductForm;