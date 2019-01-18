import React from 'react';
import BrokenTextBanner from '../../components/BrokenTextBanner/BrokenTextBanner';
import SubNav from '../../components/SubNav/SubNav';
import Info from '../../components/Info/Info';
import { landing, subNav, tshirts, spirit, practise, baseball, hoodies, backpacks } from '../../config/apparel';

const Apparel = () => {
    return (
        <>
            <BrokenTextBanner landing={ landing }/>
            <SubNav subNav={ subNav } />
            <Info info={ tshirts }/>
            <Info info={ spirit }/>
            <Info info={ practise }/>
            <Info info={ baseball }/>
            <Info info={ hoodies }/>
            <Info info={ backpacks }/>
        </>
    );
}

export default Apparel;