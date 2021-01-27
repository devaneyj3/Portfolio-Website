import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "reactstrap";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <Nav />
      <div>
        <h2 className="title">Contact Info</h2>
        <p className="info">Contact me so I can help you make an awesome website!!!</p>
          <a href="mailto:jordandevaney28@gmail.com"><Button color="primary" size='lg' >Let's start a conversation</Button></a>
      </div>
      <footer>
      <ul className="social-links">
        <a href="https://www.linkedin.com/in/jordandevaney/">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href="https://github.com/devaneyj3">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </ul>
        <section className="contact-info">
            <a href="mailto:jordandevaney28@gmail.com">jordandevaney28@gmail.com</a>{" "}
            | 810-220-9256
            <p>&copy; 2019. Jordan Devaney. All rights reserved.</p>
        </section>
      </footer>
    </section>
  );
};

export default Contact;
