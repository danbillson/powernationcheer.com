import './CookiePopup.scss';
import React, { Component } from 'react';

class CookiePopup extends Component {
    constructor(props) {
        super(props)

        this.state = { consent: false }
    }

    componentDidMount() {
        this.setState({ consent: window.localStorage.getItem('consent') });
    }

    consentGiven = () => {
        window.localStorage.setItem('consent', true);
        this.setState({ consent: true });
    }

    render() {
        if (!this.state.consent) {
            return  (
                <div className="cookiePopup">
                    <p className="cookiePopup__text">This website uses cookies to give you a better experience</p>
                    <button 
                        className="cookiePopup__button button button--secondary" 
                        onClick={this.consentGiven}>Accept</button>
                </div>
            )
        }

        return <></>
    }

}

export default CookiePopup;