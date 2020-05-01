import React from "react";
import Work from "./Work.jsx";
import Description from "./Description.jsx";
import Projects from "./Projects.jsx";
import ContactMain from "./ContactMain.jsx";
import "./portfolioPage.scss";

const Portfolio = () => {
	return (
		<div>
			<Description />
			<Work />
			<Projects />
			<ContactMain />
		</div>
	);
};

export default Portfolio;
