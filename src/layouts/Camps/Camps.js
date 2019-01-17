import React from 'react';
import BrokenTextBanner from '../../components/BrokenTextBanner/BrokenTextBanner';
import SubNav from '../../components/SubNav/SubNav';
import Info from '../../components/Info/Info';
import { landing, subNav, camps, choreography } from '../../config/camps';

const Camps = () => {
    return (
        <>
            <BrokenTextBanner landing={ landing }/>
            <SubNav subNav={ subNav } />
            <Info info={ camps }/>
            <Info info={ choreography }/>
        </>
    );
}

export default Camps;