import Statistics from './Statistics';
import FeedbackOptions from './FeedBackOptions';
import Section from './Section';
import Notification from './Notification';
import { useState } from 'react';

const STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [state, setStates] = useState(STATE);

  const leaveFeedback = values => {
    setStates(values);
  };

  const countTotalFeedback = () => {
    const states = Object.values(state);
    return states.reduce((a, b) => a + b, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={leaveFeedback} />
        {state.good !== 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
