import './ProductPage.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import store from '../../store';

const Product = () => {
    const params = useParams();
    const state = store.getState();
    const productForShow = state.products.find(
        product => product.id === params.product
    );

    return (
        <div className="ProductPage">
            {productForShow ? (
                <div>{productForShow.description}</div>
            ) : (
                <div>
                    Sorry, we couldn't find the product you're looking for
                </div>
            )}
        </div>
    );
};

export default Product;
