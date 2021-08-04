import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Tech = () => {
  return (
    <div className="tech">
      <div className="section-title">SKILLS</div>
      <div className="tech-container">
        <div className="tech-icon">
          <FaHtml5 />
          <p>HTML 5</p>
        </div>
        <div className="tech-icon">
          <FaCss3Alt />
          <p>CSS 3</p>
        </div>
        <div className="tech-icon">
          <FaSass />
          <p>Sass</p>
        </div>
        <div className="tech-icon">
          <DiReact />
          <p>React</p>
        </div>
        <div className="tech-icon">
          <SiJavascript />
          <p>JavaScript </p>
        </div>
        <div className="tech-icon">
          <SiRedux />
          <p>Redux</p>
        </div>
        <div className="tech-icon">
          <SiMongodb />
          <p>Mongo DB</p>
        </div>
        <div className="tech-icon">
          <FaNodeJs />
          <p>Node JS</p>
        </div>
        <div className="tech-icon">
          <FaBootstrap />
          <p>Bootstrap</p>
        </div>
        <div className="tech-icon">
          <FaNpm />
          <p>NPM</p>
        </div>
        <div className="tech-icon">
          <FaGithub />
          <p>Github</p>
        </div>
        <div className="tech-icon">
          <FaPython />
          <p>Python</p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
