import React from 'react';
import education from "../../data/education"
import BCIT from "../../assets/images/BCIT.png"
import CapU from "../../assets/images/CapU.png"

export default function Education() {

    const educationArray = education.map((school) => 
        <div key={school.id} className="school">
            <img id="school--img" src={ school.name.charAt(0) === "B" ? BCIT : CapU } alt={school.name}></img>
            <h3 id="school--name">{school.name}</h3>
            <p id="school--location">{school.location}</p>
            <p id="school--date">{school.from} - {school.to}</p>
            <p id="school--program">{school.program}, {school.concentration}</p>
            <i id="school--honors">{school.honors}</i>
        </div>
    )

    return (
        <div className="education" id="education">
            <h1>Education</h1>
            {educationArray}
        </div>
    )
}