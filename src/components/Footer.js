import React from 'react'
import {BsEnvelopeFill, BsLinkedin, BsGithub}  from 'react-icons/bs'
import contact from "../data/contact"

export default function Footer() {
    const iconSize = "30";

    return(
        <footer>
            <hr/>
            <a href="#about">Back to top</a>
            <div>
                <a href={"https://" + contact.github}><BsGithub size={iconSize}/></a>
                <a href={"https://" + contact.linkedin}><BsLinkedin size={iconSize}/></a>
                <a href={"mailto:" + contact.email}><BsEnvelopeFill size={iconSize}/></a>
            </div>
        </footer>
    )
}