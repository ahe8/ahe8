import React from 'react';
import projects from "../../data/projects"
import {FaGithub, FaLink} from 'react-icons/fa'

export default function Projects() {
    const imagePath = "./images/projects/"
    const iconSize = 30;

    const projectsArray = projects.map((project) => 
        <div className="card" style={{width: '18rem'}}>
            <img src={imagePath + project.name + "/cover.png"} className="card-img-top" alt={project.name + "Cover"} />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.about}</p>
                <hr/>
                <div className="card--footer">
                    <a href={project.website}>{project.website.includes("github") ? <FaGithub size={iconSize}/> : <FaLink size={iconSize}/>}</a>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#" + project.name + "Modal"}>View details</button>
                </div>
            </div>
        </div>
    )

    return (
        <div id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projects--container">
                {projectsArray}
            </div>
        </div>
    )
}       