import React, { useState } from "react";
import { VscCode } from "react-icons/vsc";
import avatar from "../img/avatar.png";

const Landing = () => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <div className="landing-container">
        <div className="title-container">
          <VscCode className="title-icon" />
          <div className="landing-subtext">
            <h2>Dylan Travis</h2>
            <div>Front-End Developer - Mobile App Developer - Leader</div>
            <button onClick={toggleTheme}>
              {theme === true ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
