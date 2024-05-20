import React from "react";
import List from '/src/components/List'

function Nav() {
 
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src="src/assets/img/logo.png" alt="logo Ibrahima Aicha" width="180px" />
                <List />
            </div>
        </nav>
    )
}

export default Nav;