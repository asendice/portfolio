import React from "react";
import avatar from "../img/avatar.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <div className="landing-avatar">
          <img className="avatar" src={avatar} />
        </div>
        <div className="landing-text">
          <h1>Hi I'm Dylan...</h1>
          <h4>
            And blah blah blah blah blah blah blah blah blah blah blah blah
          </h4>
          <h4>
            And blah blah blah blah blah blah blah blah blah blah blah blah
          </h4>
          <h4>
            And blah blah blah blah blah blah blah blah blah blah blah blah
          </h4>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/dylan-travis-2716a4205/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/asendice"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFilePdf />
        </a>
      </div>
    </>
  );
};

export default Landing;
