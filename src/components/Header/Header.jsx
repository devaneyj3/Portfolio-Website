import React, { useState } from "react";
import me from "../../images/me.png";
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
        <a href="/projects">
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
      </section>
      <div
        className="bg-photo"
        style={{
          backgroundImage: `url(${me})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
};

export default Header;
