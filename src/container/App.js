import React from "react";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import Resume from "../Pages/ResumePage/Resume";
import Work from "../components/Work/Work.jsx";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import data from "../data/projects";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.scss";
import "./media_queries.scss";

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={Header} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route
        exact
        path="/simongame"
        component={() => <ProjectItem data={data[1]} />}
      />
      <Route
        exact
        path="/anywherefitness"
        component={() => <ProjectItem data={data[0]} />}
      />
      <Route
        exact
        path="/list"
        component={() => <ProjectItem data={data[2]} />}
      />
      <Route
        exact
        path="/shoppingcart"
        component={() => <ProjectItem data={data[4]} />}
      />
      <Route
        exact
        path="/gameoflife"
        component={() => <ProjectItem data={data[3]} />}
      />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;
