import React from 'react';

import {FaEnvelope, FaLinkedin, FaGithub}  from 'react-icons/fa'
import contact from "../data/contact"

export default function Navbar(props) {
    const [isToggled, setToggled] = React.useState(false);

    function toggle() {
        setToggled(prevState => !prevState);
    }

    return (
        <nav className={props.isMobile ? "sticky-top" : ""} data-aos={props.isMobile ? "" : "fade-right"}>
            <div className={"hamburger" + (isToggled ? " active" : "")} onClick={toggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className={"sidebar"}>
                <ul className={"categories" + (isToggled ? " active" : "")}>
                    <li><a href="#about" onClick={toggle}>about</a></li>
                    <li><a href="#projects" onClick={toggle}>projects</a></li>
                    <li><a href="#education" onClick={toggle}>education</a></li>
                    <li><a href="#experience" onClick={toggle}>experience</a></li>
                </ul>

                <ul className={"contact" + (isToggled ? " active" : "")}>
                    <li id="contact-item">
                        <FaEnvelope id="contact-icon"/>
                        <a href={"mailto:" + contact.email}>{contact.email}</a>
                    </li>
                    <li id="contact-item">
                        <FaLinkedin id="contact-icon"/>
                        <a href={"https://" + contact.linkedin}>{contact.linkedin}</a>
                    </li>
                    <li id="contact-item">
                        <FaGithub id="contact-icon"/>
                        <a href={"https://" + contact.github}>{contact.github}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}