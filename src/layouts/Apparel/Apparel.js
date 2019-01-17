import React from 'react';
import BrokenTextBanner from '../../components/BrokenTextBanner/BrokenTextBanner';
import SubNav from '../../components/SubNav/SubNav';
import Info from '../../components/Info/Info';
import { landing, subNav, tshirts, vests } from '../../config/apparel';

const Apparel = () => {
    return (
        <>
            <BrokenTextBanner landing={ landing }/>
            <SubNav subNav={ subNav } />
            <Info info={ tshirts }/>
            <Info info={ vests }/>
        </>
    );
}

export default Apparel;