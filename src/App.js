import './utils/styles/main.scss';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/shopify/Cart/Cart';
import CookiePopup from './components/CookiePopup/CookiePopup';
import Home from './layouts/Home/Home';
import Apparel from './layouts/Apparel/Apparel';
import ApparelItem from './layouts/ApparelItem/ApparelItem';
import Camps from './layouts/Camps/Camps';
import Shop from './layouts/Shop/Shop';
import ProductPage from './layouts/ProductPage/ProductPage';
import Size from './layouts/Size/Size';
import { headerLinks, socialIcons, footerInfo } from './config/home';

class App extends Component {
    constructor() {
        super();
        this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
        this.handleCartClose = this.handleCartClose.bind(this);
        this.handleCartOpen = this.handleCartOpen.bind(this);
    }

    async updateQuantityInCart(lineItemId, quantity) {
        const state = store.getState();
        const checkoutId = state.checkout.id;
        const lineItemsToUpdate = [
            { id: lineItemId, quantity: parseInt(quantity, 10) }
        ];
        const res = await state.client.checkout.updateLineItems(
            checkoutId,
            lineItemsToUpdate
        );
        store.dispatch({
            type: 'UPDATE_QUANTITY_IN_CART',
            payload: { checkout: res }
        });
    }

    async removeLineItemInCart(lineItemId) {
        const state = store.getState();
        const checkoutId = state.checkout.id;
        const res = await state.client.checkout.removeLineItems(checkoutId, [
            lineItemId
        ]);
        store.dispatch({
            type: 'REMOVE_LINE_ITEM_IN_CART',
            payload: { checkout: res }
        });
    }

    handleCartClose() {
        store.dispatch({ type: 'CLOSE_CART' });
    }

    handleCartOpen() {
        store.dispatch({ type: 'OPEN_CART' });
    }

    render() {
        const state = store.getState();
        return (
            <div className="container">
                <HashRouter>
                    <>
                        <Header headerLinks={headerLinks} />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/apparel" exact component={Apparel} />
                            <Route
                                path="/apparel/:apparel"
                                exact
                                component={ApparelItem}
                            />
                            <Route path="/camps" exact component={Camps} />
                            <Route path="/shop" exact component={Shop} />
                            <Route
                                path="/product/:product"
                                exact
                                component={ProductPage}
                            />
                            <Route path="/size" exact component={Size} />
                            <Route component={Home} />
                        </Switch>
                        <Footer social={socialIcons} footerInfo={footerInfo} />
                        <Cart
                            checkout={state.checkout}
                            isCartOpen={state.isCartOpen}
                            handleCartClose={this.handleCartClose}
                            updateQuantityInCart={this.updateQuantityInCart}
                            removeLineItemInCart={this.removeLineItemInCart}
                        />
                        <CookiePopup />
                    </>
                </HashRouter>
            </div>
        );
    }
}

export default connect(state => state)(App);
