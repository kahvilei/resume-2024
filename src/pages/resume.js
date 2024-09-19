import React, { useState, useEffect } from 'react';
import Heading from '../components/heading';
import Skills from '../components/skills';
import ProjectList from '../components/projects/projectList';
import ExperienceList from '../components/experience/experienceList';
import EducationList from '../components/education/educationList';

function Resume({resume}) {
  return (
    <div className="resume-page">
        <div className='page-header'>
            <Heading heading={resume.Heading} />
        </div>
        <div className='page-columns'>
            <div className='left-column'>
            <EducationList education={resume.Education} />
            <Skills skills={resume.Skills} />
        </div>
        <div className='right-column'>
            <ExperienceList experience={resume.Experience} />
            <ProjectList projects={resume.Projects} />
        </div> 
        </div>
    </div>
  );
}



export default Resume;
