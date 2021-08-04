import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="section-title">CONTACT ME</div>
      <a
        href="mailto:dylantravisdev@gmail.com?subject=We are interested in hiring you!"
        rel="noopener noreferrer"
        target="_blank"
        className="email"
      >
        dylantravisdev@gmail.com
      </a>

      <div className="contact-container">
        <div className="contact-icon">
          <a
            href="https://www.linkedin.com/in/dylan-travis-2716a4205/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="contact-icon">
          <a
            href="https://www.github.com/asendice"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
        <div className="contact-icon">
          <a
            href="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFilePdf />
          </a>
        </div>
      </div>
      <div className="copyright">Copyright © Dylan Travis</div>
    </div>
  );
};

export default Contact;
