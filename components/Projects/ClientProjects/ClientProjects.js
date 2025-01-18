import React from "react";
import ProjectsSection from "../ProjectsSection/ProjectsSection";

const ClientProjects = ({ data }) => {
	const { client_projects } = data.portfolio;

	return (
		<ProjectsSection
			title="Check Out Some of My Client Projects"
			projects={client_projects}
			imagePath="/images/portfolio"
			sectionId="portfolioHeading"
		/>
	);
};

export default ClientProjects;
