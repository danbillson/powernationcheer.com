import React from 'react';
import Wiggle from '../assets/images/wiggle.svg';
import Apparel from '../assets/images/apparel.jpeg';

export const landing = {
    lineOne: 'Cheer',
    lineTwo: 'Apparel',
    pattern: `url(${ Wiggle })`,
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`
}

export const subNav = [{
    name: 't-shirts',
    link: '#t-shirts'
}, {
    name: 'vests',
    link: '#vests'
}, {
    name: 'spirit jerseys',
    link: '#spirit-jerseys'
}, {
    name: 'baseball jerseys',
    link: '#baseball-jerseys'
}, {
    name: 'sublimation',
    link: '#sublimation'
}, {
    name: 'uniforms',
    link: '#uniforms'
}];

export const tshirts = {
    id: 't-shirts',
    title: 'T-Shirts',
    text: 'With more than 6 years experience in the industry, Power Nation is your one stop shop for all things cheerleading in the UK, from customised apparel and uniforms to sprung floors and cheer camps. All our products are designed by cheerleaders for cheerleaders, so we understand the quality and comfort needed to perform and train your very best.',
    list: ['Worked with over 250 teams', 'Fulfilled over 1500 orders', 'Unique designs to fit your needs'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Order Now'
    },
    reverse: false
};

export const vests = {
    id: 'vests',
    title: 'vests',
    text: 'With more than 6 years experience in the industry, Power Nation is your one stop shop for all things cheerleading in the UK, from customised apparel and uniforms to sprung floors and cheer camps. All our products are designed by cheerleaders for cheerleaders, so we understand the quality and comfort needed to perform and train your very best.',
    list: ['Worked with over 250 teams', 'Fulfilled over 1500 orders', 'Unique designs to fit your needs'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Order Now'
    },
    reverse: true
};