import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Client from 'shopify-buy';
import App from './App';
import store from './store';
import { loadState } from './utils/scripts/localStorage';

const checkout = loadState();
const client = Client.buildClient({
    storefrontAccessToken: '3fd588f7039e6ecd8f7d232d3aa426d6',
    domain: 'power-nation-cheer.myshopify.com'
});

store.dispatch({ type: 'CLIENT_CREATED', payload: client });

if (!checkout) {
    client.checkout.create().then((res) => {
        store.dispatch({type: 'CHECKOUT_FOUND', payload: res});
    });
} else {
    client.checkout.fetch(checkout.id).then((res) => {
        store.dispatch({type: 'CHECKOUT_FOUND', payload: res});
      });
}
    
client.shop.fetchInfo().then((res) => {
    store.dispatch({type: 'SHOP_FOUND', payload: res});
});

client.product.fetchAll().then((res) => {
    store.dispatch({type: 'PRODUCTS_FOUND', payload: res});
});


ReactDOM.render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));