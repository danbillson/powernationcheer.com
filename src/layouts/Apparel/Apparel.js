import React from 'react';
import BrokenTextBanner from '../../components/BrokenTextBanner/BrokenTextBanner';
import FourItemLinks from '../../components/FourItemLinks/FourItemLinks';
import { landing, blockOne, blockTwo } from '../../config/apparel';

const Apparel = () => {
    return (
        <>
            <BrokenTextBanner landing={ landing }/>
            <FourItemLinks blocks={ blockOne } />
            <FourItemLinks blocks={ blockTwo } />
        </>
    );
}

export default Apparel;