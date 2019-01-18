import React from 'react';
import ReactDOM from 'react-dom';
import Client from 'shopify-buy';
import App from './App';

const client = Client.buildClient({
    storefrontAccessToken: 'e5ee2e092ef87ab2c9cb4b894c96a443',
    domain: 'https://power-nation-cheer.myshopify.com/'
})

ReactDOM.render(<App />, document.querySelector('#root'));