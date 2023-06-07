// import OutputText from "./components/OutputText";

const ProductsList = () => {
    const productsList = [
        {
            id: 1,
            productName: 'Cheese',
            weight: 150
        },
        {
            id: 2,
            productName: 'Milk',
            weight: 250
        }
    ];

    return <ul>
        {productsList.map((product) => {
            return <li key={product.id}>{product.productName}</li>
        })}

    </ul>
}

export default ProductsList;