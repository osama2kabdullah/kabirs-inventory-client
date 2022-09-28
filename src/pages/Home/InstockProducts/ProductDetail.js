import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useLoadStocks from '../../../hooks/useLoadStocks';

const ProductDetail = () => {
    const {productId} = useParams();
    const [products, setProducts] = useLoadStocks(`http://localhost:5000/inStocProduct/${productId}`);
    console.log(products);
    return (
        <div>
            product detail {productId}
        </div>
    );
};

export default ProductDetail;