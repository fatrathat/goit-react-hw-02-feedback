import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedBackOptions';
import Section from './Section';
import Notification from './Notification';
import styles from './container.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = buttonName => {
    console.log(buttonName);
    this.setState(prev => {
      return {
        [buttonName]: prev[buttonName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const states = Object.values(this.state);
    return states.reduce((a, b) => a + b, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
