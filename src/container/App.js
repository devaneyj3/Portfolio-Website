import React from "react";
import Header from "../components/Header/Header";
import Contact from "../Pages/ContactPage/Contact";
import Resume from "../Pages/ResumePage/Resume";
import Work from "../components/Work/Work.jsx";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.scss";
import "./media_queries.scss";

function App() {
  return (
    <div>
      <Route exact path="/" component={Header} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;
