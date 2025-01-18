import React from "react";
import ProjectsSection from "../ProjectsSection/ProjectsSection";

const PersonalProjects = ({ data }) => {
	const { personal_projects } = data.portfolio;

	return (
		<ProjectsSection
			title="Check Out Some of My Personal Projects"
			projects={personal_projects}
			imagePath="/images/portfolio"
			sectionId="personalProjectsHeading"
		/>
	);
};

export default PersonalProjects;
