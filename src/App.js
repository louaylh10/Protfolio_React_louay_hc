// App.js
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

import Intro from './components/intro';
import './App.css'; 

const App = () => {
  const projectsRef = useRef(null);
  
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  const skillsRef = useRef(null);

  const scrollToskills = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    
      <div>
        <Header scrollToProjects={scrollToProjects} scrollToSkills={scrollToskills}  />
        <br />
      <Intro/>
      <br />
      <Skills skillsRef={skillsRef} />
      <br />
      <Projects projectsRef={projectsRef} />
      </div>

  );
};

export default App;
