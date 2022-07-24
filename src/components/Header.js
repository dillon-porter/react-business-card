import React from "react"

export default function Header() {
    return (
        <header>
            <img src="./images/profile-pic.jpg" alt="profile picture" className="profile-pic"/>
            <h1 className="header-name">Dillon Porter</h1>
            <h2 className="header-title">Frontend Developer</h2>
            <a href="https://dillon-porter.github.io/portfolio/" target="_blank" className="website">Portfolio Website</a>
            <a href="mailto:dillonporter@hotmail.com" className="email"><i className="fa-solid fa-envelope"></i>Email</a>
        </header>
    )
}