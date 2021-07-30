import React from "react";
import avatar from "../img/avatar.png";

const About = () => {
  return (
    <div className="about">
      <div className="section-title">ABOUT ME</div>
      <div className="about-container">
        <div className="avatar-container">
          <div className="avatar-box">
            <img className="avatar" src={avatar} />
            <div className="avatar-box-images">
              <img src="https://dtravmysite.s3.us-west-1.amazonaws.com/JS.png" />
              <img src="https://dtravmysite.s3.us-west-1.amazonaws.com/react.png" />
              <img src="https://dtravmysite.s3.us-west-1.amazonaws.com/redux.png" />
            </div>
          </div>
        </div>
        <div className="about-me-container">
          <div className="about-me-box">
            <div className="dots">
              <div className="red-dot"></div>
              <div className="yellow-dot"></div>
              <div className="green-dot"></div>
            </div>
            <div className="about-me-text">
              <h2> Hi, I'm Dylan, ☕️</h2>
              <p>
                Idk what I am going to put here yet. It can't be too long and or wordy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
