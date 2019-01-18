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
    name: 't-shirts & vests',
    link: '#t-shirts'
}, {
    name: 'spirit jerseys',
    link: '#spirit-jerseys'
}, {
    name: 'practise wear',
    link: '#practise-wear'
}, {
    name: 'baseball jerseys',
    link: '#baseball-jerseys'
}, {
    name: 'hoodies & sweats',
    link: '#hoodies'
}, {
    name: 'backpacks & accessories',
    link: '#backpacks'
}];

export const tshirts = {
    id: 't-shirts',
    title: 'T-Shirts & Vests',
    text: `We specialise in creating team t-shirts & Vests designs for teams in the UK, Europe and even Worldwide. 
    Designs for t-shirts are free of charge when ordering through us! Designs as standard have 2 print colours but we can provide design that print up to 5 colours per side, we also offer glitter inks to add some extra sparkle to your designs.`,
    list: ['Free design', 'Large print area', 'Youth & adult sizes available'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Order Now'
    },
    reverse: false
};

export const spirit = {
    id: 'spirit-jerseys',
    title: 'Spirit Jerseys',
    text: `Spirit jerseys can range in designs using screen printing and vinyl to get the perfect look your team want.
    We offer spirit jersey in standards colours: Black, white, grey, pink, white with black stripes (on the sleeves) and Navy with white stripes (on the sleeves).`,
    list: ['2 print colours as standard', '10 working day turnaround*', 'High quality prints'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Order Now'
    },
    reverse: true
};

export const practise = {
    id: 'practise-wear',
    title: 'Practise Wear',
    text: `We offer a range of sublimated practice wear under this we cover sports bras, shorts, leggings, jackets, baseball jersey, basketball vest, vests and t-shirts. This can be completely customised to your teams needs, offering various styles, metallics and rhinestone detailing. 
    Designs for sublimated practice wear only cost £35, this does not give you the right to use the design elsewhere!`,
    list: ['No limit to colours', '6-8 working week turnaround*', 'Youth & adult sizes available'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Order Now'
    },
    reverse: false
};

export const baseball = {
    id: 'baseball-jerseys',
    title: 'Baseball Jerseys',
    text: `We specialise in creating products unique and personal to each customer, we offer a range of baseball jerseys from a variety of standard plain colours to sublimated full personalised jerseys. Designs for t-shirts are free of charge when ordering through us.
    Standard baseball jerseys have two colours as standard however there is no limit to what can be created, as we offer a range of glitter and plain vinyl colours.`,
    list: ['Free design', 'Plain and glitter colours available', 'High quality prints'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Order Now'
    },
    reverse: true
};

export const hoodies = {
    id: 'hoodies',
    title: 'Hoodies & Sweats',
    text: `We specialise in creating team hoodies and sweatshirt designs for teams in the UK, Europe and even Worldwide. Designs for hoodies and sweatshirts are free of charge when ordering through us! 
    Designs as standard have 2 print colours but we can provide design that print up to 5 colours per side, we also offer glitter inks to add some extra sparkle to your designs. We offer a variety of colours in all hoodies and sweatshirts. We also offer female cropped pull over and zipped hoodies.`,
    list: ['2 print colours as standard', '10 working day turnaround*', 'Youth & adult sizes available'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Order Now'
    },
    reverse: false
};

export const backpacks = {
    id: 'backpacks',
    title: 'Backpacks & Accessories',
    text: `All our backpacks can be customised to each team, we offer bags in a variety of colours and a range of sizes. 
    As well as our customised backpacks we offer accessories such as; personalised bum-bags, sliders, headbands and socks.`,
    list: ['Free design', '2 print colours as standard', 'Personalisation on all accessories'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Order Now'
    },
    reverse: true
};

