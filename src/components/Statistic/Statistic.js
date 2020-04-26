import React from 'react';
import PropTypes from 'prop-types';
import Style from '../Statistic/Statistic.module.css';

const Statistic = ({ value, label }) => (
  <>
    {label === 'Positive feedback' ? (
      <p className={Style.text}>
        {label}: {value}%
      </p>
    ) : (
      <p className={Style.text}>
        {label}: {value}
      </p>
    )}
  </>
);

Statistic.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Statistic;