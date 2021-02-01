import React from "react";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import Resume from "../Pages/ResumePage/Resume";
import Work from "../components/Work/Work.jsx";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import projects from "../data/projects";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import { Route } from "react-router-dom";
import "./reset.scss";
import "./media_queries.scss";

function App() {
  let urls = [
    "anywherefitness",
    "simongame",
    "list",
    "gameoflife",
    "shoppingcart",
  ];
  return (
    <div className="custom_container">
      <Route exact path="/" component={Header} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      {projects.map((project, index) => {
        return (
          <>
            <Route
              exact
              path={`/${urls[index]}`}
              component={() => <ProjectItem project={project} />}
            />
          </>
        );
      })}
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;
