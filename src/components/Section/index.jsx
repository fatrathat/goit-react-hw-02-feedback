import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
