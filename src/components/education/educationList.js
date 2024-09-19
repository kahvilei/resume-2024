import React from 'react';
import PropTypes from 'prop-types';
import Education from './education'; // Adjust the import path as necessary

const EducationList = ({ education }) => {
  return (
    <div className='education wrap'>
    <h2>Education</h2>
    <div className='education list'>
      {education.map((education, index) => (
        <Education key={index} education={education} />
      ))}
    </div>
    </div>
  );
};

EducationList.propTypes = {
  educations: PropTypes.arrayOf(
    PropTypes.shape({
      Degree: PropTypes.string.isRequired,
      Major: PropTypes.string.isRequired,
      School: PropTypes.string.isRequired,
      Location: PropTypes.string.isRequired,
      Dates: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EducationList;