
import React from 'react';

const Skills = ({ skillsRef }) => {
  const js = {
    color: 'yellow',
  };
  const react = {
    color: '#1B8EDD',
  };
  const php = {
    color: '#7233E7',
  };
  const py = {
    color: '#2C7EE5 ',
  };
  const node = {
    color: '#0D7F0A',
  };
  return (
    <div >
      <div className='skills'ref={skillsRef}>
        <h2>Skills</h2>
        
            <div className='skil'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png' id='skills' width={'90px'} height={'90px'} />
  <br />
  <br />
     <label style={js}> JavaScript</label>
  </div>
  <div className='skil'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' id='skills' width={'90px'} height={'90px'} />
  <br />
  <br />
   <label style={react}>&nbsp; React JS</label>
  </div>
  <div className='skil'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png' id='skills' width={'120px'} height={'90px'} />
  <br />
  <br />     <label style={php}> PHP</label>
  </div>
  <div className='skil'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' id='skills' width={'90px'} height={'90px'} />
  <br />
  <br />
<label style={py}>&nbsp; Python</label>
  </div>
  <div className='skil'>
  <img src='https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png' id='skills' width={'90px'} height={'90px'} />
  <br />
  <br />
     <label style={node}> &nbsp;Node Js</label>
  </div>
  </div>

</div>
);
};

export default Skills;
