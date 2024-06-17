import React from "react";
import about from "../../data/about"
import austin from "../../assets/images/austin.jpg"
import Skills from "./Skills"

export default function About() {
  const introArray = about.intro.map((sentence, i) => 
    <p key={"sentence" + i}>{sentence}</p>
  )

  return (
    <div className="about" id="about">
      <h1 className="about-item-1">Hi! My name is {about.firstName}!</h1>
      <img className="about-item-2" id="avatar" src={austin} alt="avatar"></img>
      <div className="about-item-3">
        {introArray}
        <Skills />
        
        <a href="#projects" className="btn btn-light">Check out my projects!</a>
      </div>
    </div>
  );
}