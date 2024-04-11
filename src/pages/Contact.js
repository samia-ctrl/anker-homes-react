import React from "react";
import NavBar from "../components/NavBar";
import "../Pages.css";
import contact from "./images/contact.png";

export default function Contact() {
  return (
    <>
      <NavBar showLogo={true} />
      <h2 className="heading contact-heading contact-heading-1">
        Contact&nbsp;<em>us</em>
      </h2>{" "}
      <img src={contact} alt="contact" className="img-fluid contact-img" />
    </>
  );
}
