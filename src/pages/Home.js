import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logo from "./images/Homepage-logo.png";
import intro from "./images/Homepage-intro.png";
import placement from "./images/tenant-placement.png";
import maintenance from "./images/maintenance.png";
import cleaning from "./images/cleaning.png";

import { Link } from "react-router-dom";

import "../Home.css";
import "../Pages.css";

export default function Home() {
  return (
    <div className="Home body">
      <NavBar showLogo={false} />
      <img src={logo} alt="logo" className="img-fluid homepage-logo mt-3" />
      <h2 className="tag-line mt-3">
        Redefining <em>Property Management</em> with purpose{" "}
      </h2>
      <div>
        <img src={intro} alt="intro" className="img-fluid homepage-intro" />
      </div>
      <h2 className="tag-line">
        Welcome to <em>Anker Solutions</em>
      </h2>
      <p className="body">
        Specialising in tenant placement and property maintenance, we offer a
        unique partnership for landlords with HMO licenses.
      </p>
      <Link to="/about">
        <button className="btn">More info</button>
      </Link>
      <br />
      <hr className="line-break" />
      <h2 className="tag-line">
        <strong>Services</strong>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={placement}
              alt="placement"
              className="img-fluid services"
            />
            <div>
              <strong>Tenant Placement</strong>
              <p className="services-description">
                Specialising in tenant placement and property maintenance, we
                offer a unique partnership for landlords with HMO licenses.
              </p>
            </div>
            <Link to="/services">
              <button className="btn">More info</button>
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={maintenance}
              alt="maintenance"
              className="img-fluid services"
            />
            <div>
              <strong>Property Maintenance</strong>
              <p className="services-description">
                Specialising in tenant placement and property maintenance, we
                offer a unique partnership for landlords with HMO licenses.
              </p>
            </div>
            <Link to="/services">
              <button className="btn">More info</button>
            </Link>
          </div>
          <div className="col-md-4">
            <img src={cleaning} alt="cleaning" className="img-fluid services" />
            <div>
              <strong>Professional Cleaning</strong>
              <p className="services-description">
                Specialising in tenant placement and property maintenance, we
                offer a unique partnership for landlords with HMO licenses.
              </p>
            </div>
            <Link to="/services">
              <button className="btn">More info</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
