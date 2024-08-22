import React from "react";

import Jobs from "./Jobs";
import styles from "./work.module.scss"; // Ensure this path matches your project structure

const Resume = ({ data }) => {
	const { skillmessage, education, work, skills } = data.resume;

	const educationMap = education.map((edu) => (
		<article key={edu.school} className={styles.educationItem}>
			<h3>{edu.school}</h3>
			<p className={styles.info}>
				{edu.degree} <span>&bull;</span>
				<em className={styles.date}>{edu.graduated}</em>
			</p>
			<p>{edu.description}</p>
		</article>
	));

	const skillsMap = skills.map((skill) => (
		<li key={skill.name} className={styles.skill}>
			<p
				style={{ width: skill.level }}
				className={`${styles.barExpand} ${skill.name.toLowerCase()}`}
				aria-label={`${skill.name} skill level`}
				role="note"></p>
			<em>{skill.name}</em>
		</li>
	));

	return (
		<section className={styles.resume}>
			<div className={`${styles.row} ${styles.education}`}>
				<div
					className={`${styles.three} ${styles.columns} ${styles.headerCol}`}>
					<h2 id="education">Education</h2>
				</div>
				<div className={`${styles.nine} ${styles.columns} ${styles.mainCol}`}>
					<div className={styles.item}>{educationMap}</div>
				</div>
			</div>

			<div className={`${styles.row} ${styles.work}`}>
				<div
					className={`${styles.three} ${styles.columns} ${styles.headerCol}`}>
					<h2 id="work">Work Experience</h2>
				</div>
				<div className={`${styles.nine} ${styles.columns} ${styles.mainCol}`}>
					<Jobs jobs={work} />
				</div>
			</div>

			<div className={`${styles.row} ${styles.skill}`}>
				<div
					className={`${styles.three} ${styles.columns} ${styles.headerCol}`}>
					<h2 id="skills">Skills</h2>
				</div>
				<div className={`${styles.nine} ${styles.columns} ${styles.mainCol}`}>
					<p>{skillmessage}</p>
					<div className={styles.bars}>
						<ul className={styles.skills}>{skillsMap}</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
