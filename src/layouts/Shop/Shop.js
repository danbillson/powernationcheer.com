import './Shop.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import Products from '../../components/shopify/Products';

class Shop extends Component {
    constructor() {
        super();
        this.addVariantToCart = this.addVariantToCart.bind(this);
    }

    addVariantToCart(variantId, quantity) {
        const state = store.getState();
        const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10)}];
        const checkoutId = state.checkout.id;
        state.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
            store.dispatch({ type: 'ADD_VARIANT_TO_CART', payload: { isCartOpen: true, checkout: res }});
        });
    }

    renderProducts() {
        const state = store.getState();
        return (
            <Products
                products={ state.products }
                client={ state.client }
                addVariantToCart={ this.addVariantToCart }
            />
        );
    }

    render() {
        return (
            <div className="shop">
                { this.renderProducts() }
            </div>
        );
    }
}

export default connect((state) => state)(Shop);