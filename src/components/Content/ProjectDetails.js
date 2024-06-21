import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa'

export default function ProjectDetails(props) {
  const iconSize = 30;
  const imagePath = "./images/projects/" + props.name + "/"

  let projectImageArray = []

  for (let i = 1; i <= props.numberOfImages; i++) {
    projectImageArray.push(
      <div key={"image" + i} className={"carousel-item" + (i === 1 ? " active" : "")}>
        <img src={imagePath + i + ".png"} className="d-block w-100" alt={props.name + i} />
      </div>
    )
  }

  const projectDescriptionArray = props.description.map((description, i) =>
    <li key={"description" + i}>{description}</li>
  )

  if (props.flowchart) {
    projectDescriptionArray.push(
      <li key="flowchart">
        <a href={props.flowchart} target="_blank" rel="noopener noreferrer">Flowchart</a>
      </li>
    )
  }

  let technologies = "";

  for (let i = 0; i < props.technologies.length; i++) {
    if (i < props.technologies.length - 1) {
      technologies = technologies + props.technologies[i] + ", "
    } else {
      technologies = technologies + props.technologies[i]
    }
  }

  return (
    <div className="modal fade" id={props.name + "Modal"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div>
            <div id={props.name + "Carousel"} className="carousel slide">
              <div className="carousel-inner">
                {projectImageArray}
              </div>
              {props.numberOfImages > 1 &&
                <>
                  <button className="carousel-control-prev" type="button" data-bs-target={"#" + props.name + "Carousel"} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={"#" + props.name + "Carousel"} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </>
              }
            </div>
            
            <div className="modal-body">
              <p>{props.about}</p>
              <ul>
                {projectDescriptionArray}
              </ul>
              <p>Technologies used: <b>{technologies}</b></p>
            </div>
          </div>
          <div className="modal-footer justify-content-between">
            {
            props.website && 
              <a href={props.website} target="_blank" rel="noopener noreferrer">
                {props.website.includes("github") ? <FaGithub size={iconSize} className="modal--icon" /> : <FaLink size={iconSize} className="modal--icon" />}
                Source Code
              </a>
            }
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
