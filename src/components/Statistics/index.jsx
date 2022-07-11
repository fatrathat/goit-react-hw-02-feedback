import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <ul className="StatiscticsList">
        <li className="StatiscticsList__item">
          <p>
            Good:
            <span className="StatiscticsList__item-value">
              {this.props.good}
            </span>
          </p>
        </li>
        <li className="StatiscticsList__item">
          <p>
            Neutral:
            <span className="StatiscticsList__item-value">
              {this.props.neutral}
            </span>
          </p>
        </li>
        <li className="StatiscticsList__item">
          <p>
            Bad:
            <span className="StatiscticsList__item-value">
              {this.props.bad}
            </span>
          </p>
        </li>
        <li className="StatiscticsList__item">
          <p>
            Total:
            <span className="StatiscticsList__item-value">
              {this.props.total}
            </span>
          </p>
        </li>
        <li className="StatiscticsList__item">
          <p>
            Positive feedback:
            <span className="StatiscticsList__item-value">
              {this.props.positivePercentage}%
            </span>
          </p>
        </li>
      </ul>
    );
  }
}

export default Statistics;
