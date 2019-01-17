import './SubNav.scss';
import React, { Component } from 'react';

class SubNav extends Component {
    renderNav = () => {
        return this.props.subNav.map((item, index) => {
            return <li className="subNav__item" key={ index } ><a href={ item.link }>{ item.name }</a></li>;
        })
    }

    render() {
        return (
            <div className="subNav">
                <ul className="subNav__nav">
                    { this.renderNav() }
                </ul>
            </div>
        );
    }
}

export default SubNav;