import './CTABanner.scss';
import React from 'react';

const CTABanner = props => {
    return (
        <div className="ctaBanner">
            <h2 className="ctaBanner__title">{ props.banner.title }</h2>
            <div className="ctaBanner__banner">
                <h3 className="ctaBanner__tagline">{ props.banner.tagline }</h3>
                <a href={ props.banner.cta.link } className="ctaBanner__cta button button--primary">{ props.banner.cta.text }</a>
            </div>
        </div>
    );
}

export default CTABanner;