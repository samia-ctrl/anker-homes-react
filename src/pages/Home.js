import React from "react";
import NavBar from "../components/NavBar";
import logo from "./images/Homepage-logo.png"
import "./Pages.css"

export default function Home() {
  return (
  <div className="Home body">
      <NavBar />
        <img src={logo} className="img-fluid homepage-logo"/>
    </div>
  );
}
