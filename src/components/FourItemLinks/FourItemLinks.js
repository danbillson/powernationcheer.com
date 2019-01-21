import './FourItemLinks.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FourItemLinks extends Component {
    renderBlocks = () => {
        return this.props.blocks.map(block => {
            return (
                <Link to={ block.link } onClick={ () => window.scrollTo(0, 0) } className="fourItemLinks__link" key={ block.name }>
                    <div className="fourItemLinks__imageContainer">
                        { block.image }
                    </div>
                    <h3 className="fourItemLinks__title">{ block.name }</h3>
                </Link>
            );
        })
    }

    render() {
        return (
            <div className="fourItemLinks">
                { this.renderBlocks() }
            </div>
        );
    }
}

export default FourItemLinks;