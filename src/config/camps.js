import Wiggle from '../assets/images/wiggle.svg';
import Camps from '../assets/images/camps.JPG';
import Choreography from '../assets/images/choreography.JPG';

export const landing = {
    lineOne: 'Camps &',
    lineTwo: 'Choreography',
    pattern: `url(${ Wiggle })`,
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Choreography })`
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
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Camps })`,
    cta: {
        link: 'mailto:info@powernationcheer.com?subject=Cheer Camps',
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
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Choreography })`,
    cta: {
        link: 'mailto:info@powernationcheer.com?subject=Cheer Choreography',
        text: 'Enquire Now'
    },
    reverse: true
};