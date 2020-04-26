import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notifications.module.css';

const Notifications = ({ message }) => (
  <div className={styles.notify}>{message}</div>
);
Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notifications;