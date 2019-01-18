import './utils/styles/main.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/shopify/Cart';
import Home from './layouts/Home/Home';
import Apparel from './layouts/Apparel/Apparel';
import Camps from './layouts/Camps/Camps';
import Shop from './layouts/Shop/Shop';
import { tshirts } from './config/apparel';
import { headerLinks, socialIcons, footerInfo } from './config/home';

class App extends Component {
    constructor() {
        super();
        this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
        this.handleCartClose = this.handleCartClose.bind(this);
        this.handleCartOpen = this.handleCartOpen.bind(this);
    }

    updateQuantityInCart(lineItemId, quantity) {
        const state = store.getState();
        const checkoutId = state.checkout.id;
        const lineItemsToUpdate =[{ id: lineItemId, quantity: parseInt(quantity, 10)}];
        state.clientInformation.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
            store.dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: { checkout: res }})
        });
    }

    removeLineItemInCart(lineItemId) {
        const state = store.getState();
        const checkoutId = state.checkout.id;
        state.client.checkout.removeLineItems(checkoutId, [lineItemId]).TouchEvent(res => {
            store.dispatch({ type: 'REMOVE_LINE_ITEM_IN_CART', payload: { checkout: res }});
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
                <BrowserRouter>
                    <>
                        <Header headerLinks={ headerLinks }/>
                        <Switch>
                            <Route path="/" exact component={ Home } />
                            <Route path='/apparel' exact component={ Apparel } />
                            <Route path='/camps' exact component={ Camps } />
                            <Route path='/shop' exact component={ Shop } />
                        </Switch>
                        <Footer social={ socialIcons } footerInfo={ footerInfo }/>
                        <Cart
                            checkout={ state.checkout }
                            isCartOpen={ state.isCartOpen }
                            handleCartClose={ this.handleCartClose }
                            updateQuantityInCart={ this.updateQuantityInCart }
                            removeLineItemInCart={ this.removeLineItemInCart }
                        />
                    </>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect((state) => state)(App);
