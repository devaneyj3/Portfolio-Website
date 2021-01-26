import React from "react";
import Portfolio from "../Pages/PortfolioPage/Portfolio";
import Contact from "../Pages/ContactPage/Contact";
import Resume from "../Pages/ResumePage/Resume";
import { Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.scss";
import "./media_queries.scss";

function App() {
  return (
    <div>
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      <Redirect from="/" to="/portfolio" />
    </div>
  );
}

export default App;
