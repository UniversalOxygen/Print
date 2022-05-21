import React from "react"

 export default function Header() {
    return (
        <header className="heading">
            <nav className="nav">
                <img className="img" src="./React-icon.png" alt="React Logo"  />
                <ul className = "nav-item">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}