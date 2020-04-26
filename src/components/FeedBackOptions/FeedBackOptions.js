import React from 'react';
import PropTypes from 'prop-types';
import Styles from './FeedbackOptions.module.css';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <div>
      <span className={Styles.btnTitle}>Please leave feedback</span>
      <div className={Styles.btnBox}>
      <button
        type="button"
        name="good"
        value={good}
        className={Styles.button}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        value={neutral}
        className={Styles.button}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        value={bad}
        className={Styles.button}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
      </div>
    </div>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;