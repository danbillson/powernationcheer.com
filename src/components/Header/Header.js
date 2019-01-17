import './Header.scss';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
    componentDidMount = () => {
        const hamburger = document.querySelector('.hamburger');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            document.querySelector('.js-nav-toggle').classList.toggle('active');
        });
        console.log(this.props);
    }

    renderNavLinks = () => {
        return this.props.headerLinks.links.map((link, index) => {
            if (!link.className) {
                return <li key={ index }><Link to={ link.link }>{ link.name }</Link></li>;
            }
            return <li key={ index }><Link to={ link.link } className={ link.className }>{ link.name }</Link></li>;
        })
    }

    render() {
        return (
            <header className={ this.props.location.pathname === '/' ? 'header' : 'header header--background'} >
                <Link to="/" className="header__logo">
                    { this.props.headerLinks.logo }
                </Link>
                <nav className="nav">
                    <ul>
                        { this.renderNavLinks() }
                    </ul>
                </nav>
                <nav className="mobileNav">
                    { this.props.headerLinks.mobileNav }
                    <div className="mobileNav__links js-nav-toggle">
                        <ul>
                            { this.renderNavLinks() }
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);