import React from "react";
import JobsContainer from "./JobsContainer";
import EductionContainer from "./EducationContainer";
import Nav from "../../components/Nav/Nav"
import "./resumePage.scss";
const Resume = () => {
	return (
		<>
		<div className="resume-page-container">
			<Nav />
			<JobsContainer />
			<hr></hr>
			<EductionContainer />
		</div>
		</>
	);
};

export default Resume;
