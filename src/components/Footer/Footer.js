import './Footer.scss';
import React, { Component } from 'react';

class Footer extends Component {
    renderSocial = () => {
        return this.props.social.map((socialIcon, index) => {
            return (
                <a href={ socialIcon.link } key={ index }>
                    { socialIcon.icon }
                </a>
            );
        })
    }

    renderFooterLists = () => {
        return this.props.footerInfo.lists.map((list, index) => {
            let listTtem = list.map(item => <li key={ item }>{ item }</li>);
            return <ul key={ index }>{ listTtem }</ul>;
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
                    <div className="footer__links">
                        { this.renderFooterLists() }
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;