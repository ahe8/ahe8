import React from "react";
import certifications from "../../data/certifications"
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Certifications() {
    const certificationsArray = certifications.map((certification) =>
        <div className="col-sm">
            <div key={certification.id} className="certification">
                <img id="certification--img" src={certification.image} alt={certification.name + "--image"} loading="lazy"></img>
                <h3 id="certification--name">{certification.name}</h3>
                <p id="certification--date">Issued {certification.date}</p>
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">
                    Show Credential <FaExternalLinkAlt size={18} />
                    </button>
                </a>
            </div>
        </div>
    )

  return (
    <div className="content--container" id="certifications">
        <div className="certifications">
            <h1>Certifications</h1>
            <div className="certifications--container">
                <div className="row">
                    {certificationsArray}
                </div>
            </div>
        </div>
    </div>
  );
}