import React from 'react';
import PropTypes from 'prop-types';
import Experience from './experience'; // Adjust the import path as necessary

const ExperienceList = ({ experience }) => {
  return (
    <div className='experience wrap'>
    <h2>Experience</h2>
    <div className='experience list'>
      {experience.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </div>
    </div>
  );
};

ExperienceList.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Company: PropTypes.string.isRequired,
      Location: PropTypes.string.isRequired,
      Dates: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ExperienceList;