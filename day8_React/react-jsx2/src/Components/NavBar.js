import React from "react";
import './NavBar.css';
import LogoImageComponents from "./Logo";

function NavBarComponents() {
    return (
        <div>
            
            <ul>
                <li><LogoImageComponents /></li>
                <li><a href="#contact">Create pikka </a></li>
                <li><a href="#about">Sign up </a></li>
                <li><a href="#about">Sign in </a></li>
                <li><a href="#about">Sign out </a></li>
            </ul>
        </div>

    )
}

export default NavBarComponents;