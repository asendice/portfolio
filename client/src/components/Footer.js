import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
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
  );
};

export default Footer;
