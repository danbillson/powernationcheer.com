import React from 'react';
import Wiggle from '../assets/images/wiggle.svg';
import Apparel from '../assets/images/apparel.jpeg';

export const landing = {
    lineOne: 'Camps &',
    lineTwo: 'Choreography',
    pattern: `url(${ Wiggle })`,
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`
}

export const subNav = [{
    name: 'camps',
    link: '#camps'
}, {
    name: 'choreography',
    link: '#choreography'
}];

export const camps = {
    id: 'camps',
    title: 'Camps',
    text: `Our camps are run by the best of coaches in the country with over 30 years combined coaching experience with Coventry Dynamite and Team England`,
    list: ['from £100/hour', 'Fully qualified and experienced coaches', 'Available for all ages and levels'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Enquire Now'
    },
    reverse: false
};

export const choreography = {
    id: 'choreography',
    title: 'Choreography',
    text: `Our choreographers here do an amazing job of putting routines together as well as making sure that they hit any score sheet criteria if needed. 
    Our cheorgraphers at power nation have choreographed for a number of teams in the UK and in Ireland over the years.`,
    list: ['£100/hour 1-15 athletes. £125/hour 16-32 athletes', 'Full routine including dance 7 hours', 'Routine without stunts and pyramid, including dance 5 hours', 'Routine clean, polish and score sheet check 3 hours'],
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`,
    cta: {
        link: '/',
        text: 'Enquire Now'
    },
    reverse: true
};