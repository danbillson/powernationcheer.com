import './Header.scss';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../../store';

class Header extends Component {
    componentDidMount = () => {
        const hamburger = document.querySelector('.hamburger');
        const carts = document.querySelectorAll('.cartIcon');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            document.querySelector('.js-nav-toggle').classList.toggle('active');
        });
        carts.forEach(cart => cart.addEventListener('click', () => {
            store.dispatch({ type: 'OPEN_CART' });
        }));
    }

    closeNav = () => {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.js-nav-toggle').classList.remove('active');
    }

    renderNavLinks = () => {
        return this.props.headerLinks.links.map((link, index) => {
            if (!link.className) {
                return <li key={ index }><Link to={ link.link } onClick={ this.closeNav }>{ link.name }</Link></li>;
            }
            return (
                <li key={ index }>
                    <Link to={ link.link } className={ link.className } onClick={ this.closeNav }>{ link.name }</Link>
                </li>
            );
        })
    }

    renderCart = () => {
        if (!this.props.headerLinks.cart) { return; }
        return this.props.headerLinks.cart
    }

    render() {
        return (
            <header className={ this.props.location.pathname === '/' ? 'header' : 'header header--background'} >
                <div className="header__nav">           
                    <Link to="/" className="header__logo">
                        { this.props.headerLinks.logo }
                    </Link>
                    <nav className="nav">
                        <ul>
                            { this.renderNavLinks() }
                            { this.renderCart() }
                        </ul>
                    </nav>
                    <nav className="mobileNav">
                        { this.renderCart() }
                        { this.props.headerLinks.mobileNav }
                        <div className="mobileNav__links js-nav-toggle">
                            <ul>
                                { this.renderNavLinks() }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);