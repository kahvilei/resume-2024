import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  return (
    <div className='skills wrap'>
    <h2>Skills</h2>
    <div className='skills list'>
      {skills.map((skill, index) => (
        <div key={index}>
          <h3>{skill.Category}</h3>
          <ul className='skills-category'>
            {skill.Items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      Category: PropTypes.string.isRequired,
      Items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Skills;