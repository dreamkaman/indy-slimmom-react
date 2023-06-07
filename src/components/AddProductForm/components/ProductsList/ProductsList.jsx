import Button from 'shared/components/Button/Button';
import OutputText from './components/OutputText';

import s from './ProductsList.module.css';
import GetSvg from 'shared/components/GetSvg/GetSvg';

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
        }
    ];

    return <ul className={s.productsList}>
        {productsList.map((product) => <li key={product.id} className={s.productsListItem}>
            <OutputText text={product.productName} className={s.outputTextProductName} />
            <OutputText text={product.productWeight} className={s.outputTextProductWeight} />
            <OutputText text={product.productCalories} className={s.outputTextProductCalories} />
            <Button className={s.closeBtn}><GetSvg name='closeBtn' className={s.closeIcon} /></Button>
        </li>)}

    </ul>
}

export default ProductsList;