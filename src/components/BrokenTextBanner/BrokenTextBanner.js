import './BrokenTextBanner.scss';
import React, { Component } from 'react';

class BrokenTextBanner extends Component {
    renderBanner = () => {

    }

    render() {
        return (
            <div className="brokenTextBanner">
                <div className="brokenTextBanner__pattern" style={{ background: this.props.landing.pattern }}></div>
                <div className="brokenTextBanner__title">
                    <h1>{ this.props.landing.lineOne }</h1>    
                    <h1>{ this.props.landing.lineTwo }</h1>    
                </div>
                <div className="brokenTextBanner__image" style={{ backgroundImage: this.props.landing.image }}></div>
            </div>
        );
    }
}

export default BrokenTextBanner;