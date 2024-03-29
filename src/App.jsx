// src/App.jsx
import React from 'react';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Landing from './components/Landingvideo';
import Introtext from './components/Landingtext';

const App = () => {
  return (
  <>
      <div className="app">
        <Navbar style={{ zIndex: 1000000 }}/>
        <Introtext style={{ zIndex: 10000 }} />
        <Landing />


        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
      </>
  );
};

export default App;
