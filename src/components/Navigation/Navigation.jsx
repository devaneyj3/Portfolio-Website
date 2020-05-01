import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
	return (
		<>
			<nav>
				<ul>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/resume">Resume</Link>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
