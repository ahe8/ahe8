import {FaEnvelope, FaLinkedin, FaGithub}  from 'react-icons/fa'
import contact from "../data/contact"


export default function Contact(props) {
    return (
        <ul className={"contact" + (props.isToggled ? " active" : "")}>
            <li id="contact-item">
                <FaEnvelope id="contact-icon"/>
                <a href={"mailto:" + contact.email}>{contact.email}</a>
            </li>
            <li id="contact-item">
                <FaLinkedin id="contact-icon"/>
                <a href={"https://" + contact.linkedin} target="_blank" rel="noopener noreferrer">
                    {contact.linkedin}
                </a>
            </li>
            <li id="contact-item">
                <FaGithub id="contact-icon"/>
                <a href={"https://" + contact.github} target="_blank" rel="noopener noreferrer">
                    {contact.github}
                </a>
            </li>
        </ul>
    )
}

