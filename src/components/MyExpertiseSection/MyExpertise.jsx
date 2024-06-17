import React from 'react';
import Expertise from './Expertise';
import './MyExpertise.css';

const MyExpertise = () => {
  return (
    <section id="expertise" className="my-expertise-section">
      <h1>My Skills</h1>
      <div className="expertise-list">
        <button className="button">Git</button>
        <button className="button">Node JS</button>
        <button className="button">Java Script</button>
        <button className="button">React</button>
        <button className="button">JAVA</button>
        <button className="button">Spring Boot</button>
      </div>
    </section>
  );
};

export default MyExpertise;
