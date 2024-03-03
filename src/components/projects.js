
import React from 'react';

const Projects = ({ projectsRef }) => {
  return (
    <div className="projects" ref={projectsRef}>
<h2>Projects</h2>
<ul className='project'>
  <li>Website Builder</li>
  <li>E-commerce shop</li>
</ul>
 </div>
  );
};

export default Projects;
