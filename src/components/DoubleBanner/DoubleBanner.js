import './DoubleBanner.scss';
import React from 'react';
import CTABanner from '../CTABanner/CTABanner';

const DoubleBanner = props => {
    const banners = props.banners.map(banner => <CTABanner banner={banner} />)

    return <div className="doubleBanner__wrapper"><div className="doubleBanner">{ banners }</div></div>
}

export default DoubleBanner;