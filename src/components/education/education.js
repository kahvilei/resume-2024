import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ education }) => {
  return (
    <div className='education item'>
      <h3>{education.Degree} in {education.Major}</h3>
      <h4>{education.School} + {education.Location}</h4>
      <h5>{education.Dates}</h5>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.shape({
    Degree: PropTypes.string.isRequired,
    Major: PropTypes.string.isRequired,
    School: PropTypes.string.isRequired,
    Location: PropTypes.string.isRequired,
    Dates: PropTypes.string.isRequired,
  }).isRequired,
};

export default Education;