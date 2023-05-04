import React from 'react';

export default function Project(props) {
    const imagePath = "./images/projects/"

    const projectDetailsArray = {
        
    }

    return (
        <div className={"carousel-item" + (props.id === 1 ? " active": "")}>
            <img src={imagePath + props.name + "/cover.png"} className="d-block w-100" alt={"project" + props.id} />
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.title}</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
    )
}