import React from 'react';
import PropTypes from 'prop-types';
import Bullets from '../bullets'; // Adjust the import path as necessary

const Project = ({ project }) => {
  return (
    <div className='project item'>
      <h3>{project.Title}</h3>
      <p>{project.Description}</p>
      <Bullets items={project.Highlights} />
      <h4>Skills Used</h4>
      <ul className='skills-category'>
        {project.Keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    Keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Project;