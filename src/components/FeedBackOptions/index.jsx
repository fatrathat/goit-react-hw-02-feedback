import { Component } from 'react';

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  IncrementButton = e => {
    const { name } = e.target;
    this.setState(prev => {
      return {
        [name]: prev[name] + 1,
      };
    });
    console.log(name);
    this.props.onLeaveFeedback(this.state);
  };

  render() {
    return (
      <div className="FeedBackButtons">
        <button name="good" type="button" onClick={this.IncrementButton}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.IncrementButton}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={this.IncrementButton}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
