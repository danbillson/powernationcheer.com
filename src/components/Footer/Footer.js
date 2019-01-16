import './Footer.scss';
import React, { Component } from 'react';

class Footer extends Component {
    renderSocial = () => {
        return this.props.social.map(socialIcon => {
            return (
                <a href={ socialIcon.link }>
                    { socialIcon.icon }
                </a>
            );
        })
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer__social">
                    { this.renderSocial() }
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">{ this.props.footerInfo.title }</h3>
                </div>
            </footer>
        );
    }
}

export default Footer;