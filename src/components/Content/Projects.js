import React from 'react';
import projects from "../../data/projects"
import Project from "./Project";

export default function Projects() {

    const projectsArray = projects.map((project) => 
        <Project
            key={projects.id}
            id={project.id}
            name={project.name}
            title={project.title}
        />
    )

    let slidesArray = [];
    for (let i = 0; i < projectsArray.length; i++) {
        slidesArray.push(
            <button 
                type="button" 
                data-bs-target="#projectsCarousel" 
                data-bs-slide-to={i + 1 + ""} 
                aria-label={"Slide " + (i + 2)}
            />
        )
    }

    return (
        <div className="projects--container" id="projects">
            <h1>Projects</h1>
            <div id="projectsCarousel" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {slidesArray}
                </div>
                <div className="carousel-inner">
                    {projectsArray}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}       