import React from 'react';
import PropTypes from 'prop-types';
import Statistic from '../Statistic/Statistic';
import Section from '../Section/Section';
import Styles from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <span className={Styles.statisticsBoxTitle} >Statistics</span>
    <ul className={Styles.statList}>
      <Section>
        <Statistic label="Good" value={good} />
      </Section>
      <Section>
        <Statistic label="Neutral" value={neutral} />
      </Section>
      <Section>
        <Statistic label="Bad" value={bad} />
      </Section>
      <Section>
        <Statistic label="Total" value={total} />
      </Section>
      <Section>
        <Statistic label="Positive feedback" value={positivePercentage} />
      </Section>
    </ul>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
