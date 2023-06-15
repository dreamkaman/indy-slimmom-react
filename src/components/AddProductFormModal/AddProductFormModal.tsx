import LabelInput from "shared/components/LabelInput";
import Button from "shared/components/Button";

import s from './AddProductFormModal.module.css';


const AddProductFormModal = ({ onSubmit }) => {
    return <form className={s.addProductForm} onSubmit={onSubmit}>
        <div className={s.inputProductBlock}>
            <div className={s.inputProductWrapper}>
                <LabelInput type='text' name='productName' labelText="Enter product name" />
            </div>
            <div className={s.inputWeightWrapper}>
                <LabelInput type='text' name='weight' labelText="Grams" />
            </div>
            <Button type='submit' className={`${s.addProductBtn} buttonRectangle buttonActive`}>Add</Button>
        </div>
    </form>
}

export default AddProductFormModal;