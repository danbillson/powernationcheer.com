import React from 'react';
import { ReactComponent as Tshirt } from '../assets/images/ios-shirt.svg';
import { ReactComponent as Floor } from '../assets/images/ios-apps.svg';
import { ReactComponent as Bulb } from '../assets/images/ios-bulb.svg';
import { ReactComponent as Size } from '../assets/images/ios-resize.svg';
import { ReactComponent as Facebook } from '../assets/images/logo-facebook.svg';
import { ReactComponent as Instagram } from '../assets/images/logo-instagram.svg';
import { ReactComponent as YouTube } from '../assets/images/logo-youtube.svg';
import PNCrew from '../assets/images/pncrew.jpg';

export const fourItemLinksBlocks = [{
    name: 'Apparel',
    link: '/apparel',
    image: <Tshirt />
},{
    name: 'Sprung Floors',
    link: '/',
    image: <Floor />
},{
    name: 'Cheer Camps & Choreography',
    link: '/camps',
    image: <Bulb />
},{
    name: 'Size Chart',
    link: '/',
    image: <Size />
}];

export const whyChooseUs = {
    title: 'Why Choose Us?',
    text: 'With more than 6 years experience in the industry, Power Nation is your one stop shop for all things cheerleading in the UK, from customised apparel and uniforms to sprung floors and cheer camps. All our products are designed by cheerleaders for cheerleaders, so we understand the quality and comfort needed to perform and train your very best.',
    list: ['Worked with over 250 teams', 'Fulfilled over 1500 orders', 'Unique designs to fit your needs'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), ${ PNCrew }`,
    cta: {
        link: '/',
        text: 'Contact Us'
    }
};

export const priceList = {
    title: 'Request a Price List',
    tagline: 'Send us an email',
    cta: {
        link: 'mailto:info@powenationcheer.com',
        text: 'Click here to request a price list'
    }
}

export const footerInfo = {
    title: 'Power Nation Cheer'
}

export const socialIcons = [{
    link: 'https://www.facebook.com/PowerNationCheer/',
    icon: <Facebook className="facebook"/>
}, {
    link: 'https://www.instagram.com/powernationcheer/',
    icon: <Instagram className="instagram"/>
}, {
    link: 'https://www.youtube.com/',
    icon: <YouTube className="youtube"/>
}]
