import React from 'react';
import PropTypes from 'prop-types';
import Project from './project'; // Adjust the import path as necessary

const ProjectList = ({ projects }) => {
  return (
    <div className='project wrap'>
    <h2>Projects</h2>
    <div className='project list'>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
      Keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ProjectList;