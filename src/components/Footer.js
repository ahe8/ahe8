import React from 'react'
import { BsEnvelopeFill, BsLinkedin, BsGithub } from 'react-icons/bs'
import contact from "../data/contact"

export default function Footer() {
    const iconSize = "30";

    return (
        <footer>
            <hr />
            <div>
                <a href={"https://" + contact.github}><BsGithub size={iconSize} /></a>
                <a href={"https://" + contact.linkedin}><BsLinkedin size={iconSize} /></a>
                <a href={"mailto:" + contact.email}><BsEnvelopeFill size={iconSize} /></a>
            </div>
            <a className="btn btn-outline-secondary" href="#about">Back to Top</a>
        </footer>
    )
}