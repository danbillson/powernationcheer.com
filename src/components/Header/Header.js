import './Header.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/powerNationLogo.svg';
import { ReactComponent as Hamburger } from '../../assets/images/hamburger.svg';

class Header extends Component {
    toggleActive = () => {
        document.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('.js-nav-toggle').classList.toggle('active');
    }

    render() {
        return (
            <header className="header">
                <Link to="/" className="header__logo">
                    <Logo />
                </Link>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Apparel</Link>
                        </li>
                        <li>
                            <Link to="/">Camps</Link>
                        </li>
                        <li>
                            <Link to="/" className="shop">Shop PN</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="mobileNav">
                    <Hamburger className="hamburger" onClick={ this.toggleActive }/>
                    <div className="mobileNav__links js-nav-toggle">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Apparel</Link>
                            </li>
                            <li>
                                <Link to="/">Camps</Link>
                            </li>
                            <li>
                                <Link to="/" className="shop">Shop PN</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;