import React from "react";
import { Link } from "react-router-dom";
import "../NavBar.css";
import logo from "../pages/images/favicon.png";


export default function NavBar({ showLogo }) {
  return (
    <nav className="NavBar body">
      <ul>
        <li className="logo">
{showLogo && <img src={logo} alt="logo-icon" className="logo"/>}        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
