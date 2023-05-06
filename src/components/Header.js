import React from 'react'

import about from "../data/about"

export default function Header() {
    return (
        <header>
            <h1 className="nameHeader">{about.firstName + " " + about.lastName}</h1>
            <p className="titleHeader"><i>{about.title}</i></p>
        </header>
    )
}