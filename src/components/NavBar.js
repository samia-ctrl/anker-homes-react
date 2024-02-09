import React from "react";
import { Link } from "react-router-dom";
import "../NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar body">
      <ul>
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
