import React from 'react';
import PropTypes from 'prop-types';

const Bullets = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

Bullets.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Bullets;