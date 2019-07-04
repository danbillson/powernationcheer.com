import React, { Component } from 'react';
import Product from '../Product/Product';

class Products extends Component {
    render() {
        let products = this.props.products.map(product => {
            return (
                <Product
                    addVariantToCart={this.props.addVariantToCart}
                    client={this.props.client}
                    key={product.id.toString()}
                    product={product}
                />
            );
        });

        return (
            <div className="Product-wrapper">
                {products}
                {this.props.products.length === 0 && (
                    <p>Sorry, no items are available at this time.</p>
                )}
            </div>
        );
    }
}

export default Products;
