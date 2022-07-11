import { Component } from 'react';

class FeedbackOptions extends Component {
  state = {
    good: this.props.options.good,
    neutral: this.props.options.neutral,
    bad: this.props.options.bad,
  };

  IncrementGoodHandler = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.props.onLeaveFeedback(this.state);
  };
  IncrementNeutralHandler = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.props.onLeaveFeedback(this.state);
  };
  IncrementBadHandler = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.props.onLeaveFeedback(this.state);
  };

  render() {
    return (
      <div className="FeedBackButtons">
        <button type="button" onClick={this.IncrementGoodHandler}>
          Good
        </button>
        <button type="button" onClick={this.IncrementNeutralHandler}>
          Neutral
        </button>
        <button type="button" onClick={this.IncrementBadHandler}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
