import React from 'react'
import {FaEnvelope, FaLinkedin, FaGithub}  from 'react-icons/fa'
import contact from "../data/contact"


export default function Contact() {
    return (
        <ul>
            <li><FaEnvelope /><a href={"mailto:" + contact.email}>{contact.email}</a></li>
            <li><FaLinkedin /><a href={"https://" + contact.linkedin}>{contact.linkedin}</a></li>
            <li><FaGithub /><a href={"https://" + contact.github}>{contact.github}</a></li>
        </ul>
    )
}

