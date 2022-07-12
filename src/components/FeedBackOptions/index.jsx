import { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  IncrementFeedback = e => {
    const { name } = e.target;
    this.setState(prev => {
      return {
        [name]: prev[name] + 1,
      };
    });
    this.props.onLeaveFeedback(this.state);
  };

  render() {
    return (
      <div className="FeedBackButtons">
        <button name="good" type="button" onClick={this.IncrementFeedback}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.IncrementFeedback}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={this.IncrementFeedback}>
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
