import React from "react";
import Jobs from "./Jobs";

const Resume = ({ data }) => {
	const { skillmessage, education, work, skills } = data.resume;
	const educationMap = education.map((education) => {
		return (
			<div key={education.school}>
				<h3>{education.school}</h3>
				<p className="info">
					{education.degree} <span>&bull;</span>
					<em className="date">{education.graduated}</em>
				</p>
				<p>{education.description}</p>
			</div>
		);
	});
	const skillsMap = skills.map((skills) => {
		const className = "bar-expand " + skills.name.toLowerCase();
		return (
			<li key={skills.name}>
				<span style={{ width: skills.level }} className={className}></span>
				<em>{skills.name}</em>
			</li>
		);
	});

	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<div className="row item">
						<div className="twelve columns">{educationMap}</div>
					</div>
				</div>
			</div>

			<div className="row work">
				<div className="three columns header-col">
					<h1>
						<span>Work</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<Jobs jobs={work} />
				</div>
			</div>

			<div className="row skill">
				<div className="three columns header-col">
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<p>{skillmessage}</p>

					<div className="bars">
						<ul className="skills">{skillsMap}</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
