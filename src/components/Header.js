import React from 'react'

import about from "../data/about"

export default function Header() {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
    
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
        <header className={isMobile ? "sticky-top" : ""} data-aos="fade-down">
            <h1 className="nameHeader">{about.firstName + " " + about.lastName}</h1>
            <p className="titleHeader"><i>{about.title}</i></p>
        </header>
    )
}