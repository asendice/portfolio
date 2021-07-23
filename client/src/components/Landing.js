import React from "react";
import avatar from "../img/avatar.png"

const Landing = () => {

  return (
    <div className="landing-container">
      <div className="landing-avatar">
        <img className="avatar"src={avatar}/>
      </div>
      <div className="landing-text">
        <h1>Hi I'm Dylan...</h1>
        <h4>And blah blah blah blah blah blah blah blah blah blah blah blah</h4>
        <h4>And blah blah blah blah blah blah blah blah blah blah blah blah</h4>
        <h4>And blah blah blah blah blah blah blah blah blah blah blah blah</h4>
      </div>
      <div className="landing-icons">
        
      </div>
    </div>
  )
}

export default Landing;