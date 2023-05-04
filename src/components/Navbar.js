import React from 'react';

import about from "../data/about"
import Contact from "./Contact"

import {FaEnvelope, FaLinkedin, FaGithub}  from 'react-icons/fa'
import contact from "../data/contact"

export default function Navbar() {
    const [isToggled, setToggled] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)

    function toggle() {
        setToggled(prevState => !prevState);
    }

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    React.useEffect(() => {
        window.addEventListener("resize", handleResize)

        return function cleanupListener() {
            window.removeEventListener('resize', handleResize)
        };
    })

    return (
        <nav className={isMobile ? "sticky-top" : ""} data-aos="fade-right">
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