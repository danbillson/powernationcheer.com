import './Hero.scss';
import React from 'react';

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="hero__content">
                <h1 className="hero__title">{ props.title }</h1>
                <div className="hero__divider"></div>
                <h2 className="hero__subtitle">{ props.subtitle }</h2>
                <div className="hero__buttons">
                    <a href={ props.buttonPrimary.link } className="button button--primary">{ props.buttonPrimary.text }</a>
                    <a href={ props.buttonSecondary.link } className="button button--secondary">{ props.buttonSecondary.text }</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;