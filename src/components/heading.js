import React from 'react';
import PropTypes from 'prop-types';
import Contacts from './contacts'; // Adjust the import path as necessary

const Heading = ({ heading }) => {
  return (
    <div className='heading'>
      <h1>{heading.Name}</h1>
      <h2>{heading.Title}</h2>
      <h4>{heading.Location}</h4>
      <Contacts contacts={heading.Contacts} />
    </div>
  );
};

Heading.propTypes = {
  heading: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Location: PropTypes.string.isRequired,
    Contacts: PropTypes.arrayOf(
      PropTypes.shape({
        Type: PropTypes.string.isRequired,
        Value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Heading;