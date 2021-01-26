import React from "react";
import JobsContainer from "./JobsContainer";
import EductionContainer from "./EducationContainer";
import "./resumePage.scss";
const Resume = () => {
	return (
		<div className="resume-page-container">
			<JobsContainer />
			<hr></hr>
			<EductionContainer />
		</div>
	);
};

export default Resume;
