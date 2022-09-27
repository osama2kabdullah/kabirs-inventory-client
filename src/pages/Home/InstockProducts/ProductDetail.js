import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    return (
        <div>
            product detail {productId}
        </div>
    );
};

export default ProductDetail;