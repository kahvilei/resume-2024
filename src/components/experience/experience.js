import React from 'react';
import PropTypes from 'prop-types';
import Bullets from '../bullets'; // Adjust the import path as necessary

const Experience = ({ experience }) => {
  return (
    <div className='experience item'>
      <div className='experience header'><h3>{experience.Title}</h3><h5>{experience.Dates}</h5></div>
      <h4>{experience.Company} - {experience.Location}</h4>
      <p>{experience.Description}</p>
      <Bullets items={experience.Highlights} />
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Company: PropTypes.string.isRequired,
    Location: PropTypes.string.isRequired,
    Dates: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Experience;