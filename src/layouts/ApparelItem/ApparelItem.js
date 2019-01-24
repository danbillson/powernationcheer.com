import React, { Component } from 'react';
import Info from '../../components/Info/Info';
import { tshirts, spirit, practise, baseball, hoodies, backpacks } from '../../config/apparel';

class Apparel extends Component {
    getComponent() {
        switch (this.props.match.params.apparel) {
            case 'tshirts':
                return tshirts;
            case 'spirit':
                return spirit;
            case 'practise':
                return practise;
            case 'baseball':
                return baseball;
            case 'hoodies':
                return hoodies;
            case 'backpacks':
                return backpacks;
            default:
                return;
        }
    }

    render() {
        return (
            <>
                <Info info={ this.getComponent() } banner="true"/>
            </>
        );
    }
}

export default Apparel;