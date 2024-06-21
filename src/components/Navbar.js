import React from 'react';
import Contact from "./Contact"

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
                    <li><a href="#experience" onClick={toggle}>experience</a></li>
                    <li><a href="#projects" onClick={toggle}>projects</a></li>
                    <li><a href="#education" onClick={toggle}>education</a></li>
                    <li><a href="#certifications" onClick={toggle}>certifications</a></li>
                </ul>
                <Contact isToggled={isToggled}/>
            </div>
        </nav>
    )
}