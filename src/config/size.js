import Wiggle from '../assets/images/wiggle.svg';
import Apparel from '../assets/images/apparel.jpeg';

export const landing = {
    lineOne: 'Size',
    lineTwo: 'Chart',
    pattern: `url(${ Wiggle })`,
    image: `linear-gradient(to right, rgba(94,6,46,0.1), rgba(0,0,0,0.6)), url(${ Apparel })`
}

export const subNav = [{
    name: 'crop set',
    link: '#crop-tops'
}, {
    name: 'sublimated vest',
    link: '#vests'
}, {
    name: 'spirit jerseys',
    link: '#spirit-jerseys'
}, {
    name: 'jackets',
    link: '#womens-jacket'
}, {
    name: 'leggings & capris',
    link: '#leggings'
}, {
    name: 'baseball jerseys',
    link: '#baseball-jerseys'
}];

export const cropTop = {
    id: 'crop-tops',
    name: 'Crop Tops',
    labels: ['Size', 'Chest', 'Length', 'Clothing Size'],
    sizes: [
        ['YXS', 22, '', ''],
        ['YS', 23, '', ''],
        ['YM', 24, '', ''],
        ['YL', 25, '', ''],
        ['YXL', 27, '', ''],
        ['AS', 29, '', 'Size 6 - 8'],
        ['AM', 31, '', 'Size 8 - 10'],
        ['AL', 33, '', 'Size 10 - 12'],
        ['AXL', 36, '', 'Size 12 - 14'],
        ['A2XL', 38, '', 'Size 14 - 16']
    ]
}

export const cropShorts = {
    id: 'crop-shorts',
    name: 'Crop Shorts',
    labels: ['Size', 'Waist', 'Length', 'Clothing Size'],
    sizes: [
        ['YXS', 18, 7, ''],
        ['YS', 19, 7.5, ''],
        ['YM', 20, 8, ''],
        ['YL', 22, 8.5, ''],
        ['YXL', 24, 9.5, ''],
        ['AXS', 26, 9.5, 'Size 4 - 6'],
        ['AS', 28, 10, 'Size 6 - 8'],
        ['AM', 30, 10.5, 'Size 8 - 10'],
        ['AL' , 32, 11, 'Size 10 - 12'],
        ['AXL', 34, 12, 'Size 12 - 14']
    ]
}

export const spiritJersey = {
    id: 'spirit-jerseys',
    name: 'Spirit Jerseys',
    labels: ['Size', 'Chest', 'Clothing Size'],
    sizes: [
        ['YS', 28, ''],
        ['YM', 30, ''],
        ['YL', 32, ''],
        ['YXL', 34, 'Size 6'],
        ['AXXS', '32/34', 'Size 4'],
        ['AXS', '34/36', 'Size 6'],
        ['AS', '36/38', 'Size 6 - 8'],
        ['AM', '38/40', 'Size 8 - 10'],
        ['AL', 42, 'Size 10 - 12'],
        ['AXL', '44/46', 'Size 12 - 14'],
        ['AXXL', 48, 'Size 14 - 16']
    ]
}

export const vest = {
    id: 'vests',
    name: 'Sublimated Vests',
    labels: ['Size', 'Chest', 'Length'],
    sizes: [
        ['YS', 30, 21],
        ['YM', 32, 22],
        ['YL', 34, 23],
        ['AXS', 32, 24],
        ['AS', 36, 25],
        ['AM', 38, 26],
        ['AL', 40, 27],
        ['AXL', 43, 27],
        ['AXXL', 45, 28]
    ]
}

export const womensJacket = {
    id: 'womens-jacket',
    name: `Women's Jackets`,
    labels: ['Size', 'Chest', 'Length', 'Clothing Size'],
    sizes: [
        ['YXXS', 24, 14, ''],
        ['YXS', 25, 16, ''],
        ['YS', 27, 18, ''],
        ['YM', 29, 20, ''],
        ['YL', 32, 21, 'Size 4- 6'],
        ['YXL', 34, 22, 'Size 6 - 8'],
        ['AS', 36, 24, 'Size 8 - 10'],
        ['AM', 38, 26, 'Size 10 - 12'],
        ['AL', 41, 28, 'Size 12 - 14'],
        ['AXL', 44, 30, 'Size 14 -16']
    ]
}

export const mensJacket = {
    id: 'mens-jacket',
    name: `Men's Jackets`,
    labels: ['Size', 'Chest', 'Length'],
    sizes: [
        ['YS', 32, 18],
        ['YM', 32, 20],
        ['YL', 34, 21],
        ['YXL', 36, 22],
        ['AS', 38, 24],
        ['AM', 40, 26],
        ['AL', 42, 28],
        ['AXL', 45, 30]
    ]
}

export const leggings = {
    id: 'leggings',
    name: 'Leggings',
    labels: ['Size', 'Waist', 'Length', 'Clothing Size'],
    sizes: [
        ['YXS', 18, 24, ''],
        ['YS', 19, 26, ''],
        ['YM', 20, 28, ''],
        ['YL', 22, 30, ''],
        ['YXL', 24, 32, ''],
        ['AXS', 26, 33, 'Size 4 - 6'],
        ['AS', 28, 34, 'Size 6 - 8'],
        ['AM', 30, 36, 'Size 8 - 10'],
        ['AL' , 32, 38, 'Size 10 - 12'],
        ['AXL', 34, 40, 'Size 12 - 14'],
        ['A2XL', 36, 40, 'Size 14 - 16']
    ]
}

export const capris = {
    id: 'capris',
    name: 'Capris',
    labels: ['Size', 'Waist', 'Length', 'Clothing Size'],
    sizes: [
        ['YXS', 18, 18, ''],
        ['YS', 19, 20, ''],
        ['YM', 20, 22, ''],
        ['YL', 22, 24, ''],
        ['YXL', 24, 25, ''],
        ['AXS', 26, 26, 'Size 4 - 6'],
        ['AS', 28, 26, 'Size 6 - 8'],
        ['AM', 30, 28, 'Size 8 - 10'],
        ['AL' , 32, 30, 'Size 10 - 12'],
        ['AXL', 34, 32, 'Size 12 - 14'],
        ['A2XL', 36, 34, 'Size 14 - 16']
    ]
}

export const baseballJersey = {
    id: 'baseball-jerseys',
    name: 'Baseball Jerseys',
    labels: ['Size', 'Chest'],
    sizes: [
        ['YS', '25 - 27'],
        ['YM', '28 - 30'],
        ['YL', '31 - 33'],
        ['AS', '34 - 37'],
        ['AM', '38 - 41'],
        ['AL', '42 - 45'],
        ['AXL', '46 - 49'],
        ['A2XL', '50 - 53'],
        ['A3XL', '54 - 57']
    ]
}