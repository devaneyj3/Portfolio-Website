import React from "react";
import Navigation from "../components/Navigation/Navigation.jsx";
import Portfolio from "../components/PortfolioPage/Portfolio.jsx";
import Contact from "../components/ContactPage/Contact.jsx";
import Resume from "../components/ResumePage/Resume.jsx";
import { Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.scss";
import './media_queries.scss'

function App() {
	return (
		<div>
			<Navigation />
			<Route exact path="/portfolio" component={Portfolio} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/resume" component={Resume} />
			<Redirect from="/" to="/portfolio" />
		</div>
	);
}

export default App;
