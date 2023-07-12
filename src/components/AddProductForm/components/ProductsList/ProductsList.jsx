import Button from 'shared/components/Button/Button';
import OutputText from './components/OutputText';
import GetSvg from 'shared/components/GetSvg/GetSvg';

import { addDimension } from 'shared/tools/addDimension/addDimension';

import s from './ProductsList.module.css';


const ProductsList = () => {
    const productsList = [
        {
            id: 1,
            productName: 'Cheese',
            productWeight: 150,
            productCalories: 750,
        },
        {
            id: 2,
            productName: 'Milk',
            productWeight: 250,
            productCalories: 900,
        },
        {
            id: 3,
            productName: 'Red meat',
            productWeight: 250,
            productCalories: 900,
        },
        {
            id: 4,
            productName: 'Sausage',
            productWeight: 250,
            productCalories: 600,
        },
        {
            id: 5,
            productName: 'Paper',
            productWeight: 150,
            productCalories: 300,
        },
        {
            id: 6,
            productName: 'Sweets',
            productWeight: 150,
            productCalories: 400,
        }
    ];

    return <ul className={s.productsList}>
        {productsList.map((product) => <li key={product.id} className={s.productsListItem}>
            <OutputText text={product.productName} className={s.outputTextProductName} />
            <OutputText text={addDimension(product.productWeight, 'g')} className={s.outputTextProductWeight} />
            <OutputText text={addDimension(product.productCalories, 'kcal')} className={s.outputTextProductCalories} />
            <Button className={`transparentButton`}><GetSvg name='closeBtn' className={s.closeIcon} /></Button>
        </li>)}

    </ul>
}

export default ProductsList;