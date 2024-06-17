import React, {  } from "react";
import "./Experience.css";
import { IoLocation } from "react-icons/io5";

const Experience = ({
  tagLine,
  website,
  description,
  skills,
  logo,
}) => {

  return (
    <div className="exp">
      <div className="mainContent" > 
        <div className="headline">
          <span className="title">{tagLine}</span>
        </div>
      </div>
  
        <div className="hiddenContent">
          <div className="description-area">
            <div className="addressAndWebsite">
              <IoLocation />
              <a href={website} target="_blank" rel="noreferrer">
                {website.replace(/^https?:\/\//, "")}
              </a>
            </div>
            <p>{description}</p>
            <div className="skills-buttons">
              {skills.map((skill, index) => (
                <button key={index}>{skill}</button>
              ))}
            </div>
          </div>
          <div className="logo-area">
            <img src={logo} alt="Company Logo" />
          </div>
        </div>
      
    </div>
  );
};

export default Experience;
