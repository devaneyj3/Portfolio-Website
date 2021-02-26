import React, { useState } from "react";
import me from "../../images/Me.jpg";
import "./Header.scss";

const Header = () => {
  const [aboutText, setAboutText] = useState("Hello.");
  const [workText, setWorkText] = useState("I am");
  const [contactText, setContactText] = useState("Jordan");
  return (
    <section className="home">
      <section className="links">
        <a href="/about">
          <h1
            onMouseEnter={() => setAboutText("About")}
            onMouseLeave={() => setAboutText("Hello.")}
          >
            {aboutText}
          </h1>
        </a>
        <a href="/work">
          <h1
            onMouseEnter={() => setWorkText("Work")}
            onMouseLeave={() => setWorkText("I am")}
          >
            {workText}
          </h1>
        </a>
        <a href="/contact">
          <h1
            onMouseEnter={() => setContactText("Contact")}
            onMouseLeave={() => setContactText("Jordan")}
          >
            {contactText}
          </h1>
        </a>
        <a href="/resume">
          <h1
          >
            Resume
          </h1>
          </a>
        <a href="https://thesoftwareaccelerator.com">
          <h1
          >
            Blog
          </h1>
        </a>
      </section>
      <img src={me} alt={me}/>
    </section>
  );
};

export default Header;
