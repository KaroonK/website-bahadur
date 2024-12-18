import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/shortlogo.png'


export default function Navigation() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}