import './Info.scss';
import React, { Component } from 'react';

class Info extends Component {
    renderList = () => {
        return this.props.info.list.map((item, index) => {
            return (
                <li className="info__listItem" key={ index }>
                    <div className="info__listBullet">{ index + 1 }</div>
                    { item }
                </li>
            );
        })
    }

    render () {
        return (
            <div className={ !this.props.info.reverse ? "info" : "info info__reverse" } id={ this.props.info.id }>
                <div className="info__image" style={{ backgroundImage: this.props.info.image }}></div>
                <div className="info__content">
                    <h3 className="info__title">{ this.props.info.title }</h3>
                    <p className="info__text">{ this.props.info.text }</p>
                    <ul className="info__list">
                        { this.renderList() }
                    </ul>
                    <a href={ this.props.info.cta.link } className="info__cta button button--secondary">{ this.props.info.cta.text }</a>
                </div>
            </div>
        );
    }
}

export default Info;