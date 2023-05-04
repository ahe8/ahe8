import React from 'react';
import experience from "../../data/experience"
import mcdonalds from "../../assets/images/mcdonalds.png"
import freedommobile from "../../assets/images/freedommobile.png"

export default function Experience() {

    const experienceArray = experience.map((exp) => 
        <div key={exp.id}>
            <img src={exp.company.charAt(0) === "M" ? mcdonalds : freedommobile}></img>
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
            <p>{exp.from} - {exp.to}</p>
        </div>
    )

    return (
        <div className="experience" id="experience">
            <h1>Experience</h1>
            {experienceArray}
        </div>
    )
}