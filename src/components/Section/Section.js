import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children }) => <li className="Item">{children}</li>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Section;