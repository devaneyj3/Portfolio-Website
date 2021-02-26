import React from "react";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import Resume from "../Pages/ResumePage/Resume";
import Work from "../components/Work/Work.jsx";
import About from "../components/About/About";
import { Route } from "react-router-dom";
import "./reset.scss";
import "./media_queries.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="custom_container">
      <Route exact path="/" component={Header} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;
