import React from 'react';
import BrokenTextBanner from '../../components/BrokenTextBanner/BrokenTextBanner';
import SubNav from '../../components/SubNav/SubNav';
import SizeChart from '../../components/SizeChart/SizeChart';
import { landing, subNav, cropTop, cropShorts, vest, spiritJersey, womensJacket, mensJacket, leggings, capris, baseballJersey } from '../../config/size';

const Size = () => {
    return (
        <>
            <BrokenTextBanner landing={ landing }/>
            <SubNav subNav={ subNav } />
            <div className="sizeChartRow">
                <SizeChart sizes={ cropTop }/>
                <SizeChart sizes={ cropShorts }/>
            </div>
            <div className="sizeChartRow">
                <SizeChart sizes={ vest }/>
                <SizeChart sizes={ spiritJersey }/>
            </div>
            <div className="sizeChartRow">
                <SizeChart sizes={ womensJacket }/>
                <SizeChart sizes={ mensJacket }/>
            </div>
            <div className="sizeChartRow">
                <SizeChart sizes={ leggings }/>
                <SizeChart sizes={ capris }/>
            </div>
            <SizeChart sizes={ baseballJersey }/>
        </>
    );
}

export default Size;