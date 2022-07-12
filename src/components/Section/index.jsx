import React, { Component } from 'react';
import styles from './styles.module.css';

class Section extends Component {
  render() {
    return (
      <div className={styles.Section}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
