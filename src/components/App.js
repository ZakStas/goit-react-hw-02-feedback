import React, { Component } from 'react';
import FeedBackOptions from './FeedBackOptions/FeedBackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


export default class App extends Component {
  state = { good: 0,
            neutral: 0,
            bad: 0, };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const percentagePositiveFeedback = `${Math.floor(
      (good / this.countTotalFeedback()) * 100,
    )}`;
    return Number (percentagePositiveFeedback);
  }


handleLeaveFeedback = e =>  {
  const { name } = e.target;

  this.setState(prevState => ({
    [name]: prevState[name] + 1,
  }));
  this.countTotalFeedback();
  this.countPositiveFeedbackPercentage();
};


  render() {
    const { good, neutral, bad } = this.state;
    return ( 
      <div>
       <FeedBackOptions
          options={this.state}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
    </div>
      );  
  }
}