import './SizeChart.scss';
import React, { Component } from 'react';

class SizeChart extends Component {
    getColumnWidth = () => {
        return `${100 / this.props.sizes.labels.length}%`;
    }

    renderLabels() {
        return this.props.sizes.labels.map(label => {
            return <span style={{ width: this.getColumnWidth() }}>{ label }</span>;
        })
    }

    renderSizeChart() {
        return this.props.sizes.sizes.map(size => {
            let cell =  size.map(field => <span style={{ width: this.getColumnWidth() }}>{ field }</span>);
            return <li className="sizeChart__listItem">{ cell }</li>;
        })
    }

    render() {
        return (
            <div className="sizeChart" id={ this.props.sizes.id }>
                <h2>{ this.props.sizes.name }</h2>
                <ul className="sizeChart__list">
                    <li className="sizeChart__listItem">{ this.renderLabels() }</li>
                    { this.renderSizeChart() }
                </ul>
                <p className="sizeChart__note">Measurements in inches</p>
            </div>
        );
    }
}

export default SizeChart;