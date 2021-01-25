import React from "react";
import Work from "./Work.jsx";
import Header from "./Header.jsx";
import Projects from "./Projects.jsx";
import ContactMain from "./ContactMain.jsx";
import About from "./About.jsx";
import "./portfolioPage.scss";

const Portfolio = () => {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Work />
			<ContactMain />
		</div>
	);
};

export default Portfolio;
