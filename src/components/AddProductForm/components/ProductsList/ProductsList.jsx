import Button from 'shared/components/Button/Button';
import OutputText from './components/OutputText';
import GetSvg from 'shared/components/GetSvg/GetSvg';

import { addDimension } from 'shared/tools/addDimension/addDimension';

import s from './ProductsList.module.css';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getEatenProductListSelector } from 'redux/selectors/dayInfo'
import { deleteEatenProductAction } from 'redux/actions/dayInfo/actionCreator';
import { isAuthSelector } from 'redux/selectors/user';


const ProductsList = () => {
    const dispatch = useAppDispatch();
    const eatenProductsList = useAppSelector(getEatenProductListSelector);
    const token = useAppSelector(isAuthSelector);

    const handleDeleteClick = (e) => {
        console.dir(e.currentTarget.id);
        dispatch(deleteEatenProductAction())
    }

    return <ul className={s.productsList}>
        {eatenProductsList.map((product) => <li key={product.id} className={s.productsListItem}>
            <OutputText text={product.title} className={s.outputTextProductName} />
            <OutputText text={addDimension(Math.round(product.weight), 'g')} className={s.outputTextProductWeight} />
            <OutputText text={addDimension(Math.round(product.kcal), 'kcal')} className={s.outputTextProductCalories} />
            <Button id={product.id} className={`transparentButton`} onClick={handleDeleteClick}><GetSvg name='closeBtn' className={s.closeIcon} /></Button>
        </li>)}

    </ul>
}

export default ProductsList;