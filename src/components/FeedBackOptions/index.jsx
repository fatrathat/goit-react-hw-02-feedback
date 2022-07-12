import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class FeedbackOptions extends Component {
  IncrementFeedback = e => {
    const { name } = e.target;
    this.props.onLeaveFeedback(name);
  };

  render() {
    return (
      <div className={styles.FeedBackButtons}>
        <button
          className={styles.FeedBackButton}
          name="good"
          type="button"
          onClick={this.IncrementFeedback}
        >
          Good
        </button>
        <button
          className={styles.FeedBackButton}
          name="neutral"
          type="button"
          onClick={this.IncrementFeedback}
        >
          Neutral
        </button>
        <button
          className={styles.FeedBackButton}
          name="bad"
          type="button"
          onClick={this.IncrementFeedback}
        >
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
