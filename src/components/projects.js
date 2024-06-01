
import React from 'react';
import lim from '../img/lim.png';
const Projects = ({ projectsRef }) => {
  return (
    <div className="projects" ref={projectsRef}>
<h2>Projects</h2>
<div className='prjcts'>
  <div class="prj">
    <div className='wbs'>
<img src={lim} alt='' />
    </div>
    <div className='prtit'>
    <a href='http://www.lim.tn' target='_blank'>lim.tn</a>
    </div>
  </div>
  
</div>
 </div>
  );
};

export default Projects;
