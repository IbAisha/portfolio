import React, {useState} from "react";

function Nav() {
 
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src="src/assets/img/logo.png" alt="logo Ibrahima Aicha" width="200px" />

                <ul>
                    <li><a href="#">//Home</a></li>
                    <li><a href="#">//Projets</a></li>
                    <li><a href="#">//About me</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;