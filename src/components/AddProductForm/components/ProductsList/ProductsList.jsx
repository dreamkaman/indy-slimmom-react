import Button from 'shared/components/Button/Button';
import OutputText from './components/OutputText';
import GetSvg from 'shared/components/GetSvg/GetSvg';

import { addDimension } from 'shared/tools/addDimension/addDimension';

import s from './ProductsList.module.css';
import { useAppSelector } from 'redux/hooks';
import { getEatenProductListSelector } from 'redux/selectors/dayInfo'


const ProductsList = () => {

    const eatenProductsList = useAppSelector(getEatenProductListSelector);

    return <ul className={s.productsList}>
        {eatenProductsList.map((product) => <li key={product.id} className={s.productsListItem}>
            <OutputText text={product.title} className={s.outputTextProductName} />
            <OutputText text={addDimension(Math.round(product.weight), 'g')} className={s.outputTextProductWeight} />
            <OutputText text={addDimension(Math.round(product.kcal), 'kcal')} className={s.outputTextProductCalories} />
            <Button className={`transparentButton`}><GetSvg name='closeBtn' className={s.closeIcon} /></Button>
        </li>)}

    </ul>
}

export default ProductsList;