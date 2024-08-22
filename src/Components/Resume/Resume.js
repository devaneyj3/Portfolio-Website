import React from "react";
import Jobs from "./Jobs";
import styles from "./work.module.scss"; // Adjust the path to where your SCSS file is located

const Resume = ({ data }) => {
	const { skillmessage, education, work, skills } = data.resume;
	const educationMap = education.map((education) => {
		return (
			<div key={education.school} className={styles.educationItem}>
				<h3>{education.school}</h3>
				<p className={styles.info}>
					{education.degree} <span>&bull;</span>
					<em className={styles.date}>{education.graduated}</em>
				</p>
				<p>{education.description}</p>
			</div>
		);
	});
	const skillsMap = skills.map((skill) => {
		const className = `${styles.barExpand} ${skill.name.toLowerCase()}`;
		return (
			<li key={skill.name} className={styles.skill}>
				<span style={{ width: skill.level }} className={className}></span>
				<em>{skill.name}</em>
			</li>
		);
	});

	return (
		<section className={styles.resume}>
			<div className={`${styles.row} ${styles.education}`}>
				<div
					className={`${styles.three} ${styles.columns} ${styles.headerCol}`}>
					<h2>
						<span>Education</span>
					</h2>
				</div>

				<div className={`${styles.nine} ${styles.columns} ${styles.mainCol}`}>
					<div className={styles.item}>
						<div className={styles.twelve}>{educationMap}</div>
					</div>
				</div>
			</div>

			<div className={`${styles.row} ${styles.work}`}>
				<div
					className={`${styles.three} ${styles.columns} ${styles.headerCol}`}>
					<h2>
						<span>Work</span>
					</h2>
				</div>

				<div className={`${styles.nine} ${styles.columns} ${styles.mainCol}`}>
					<Jobs jobs={work} />
				</div>
			</div>

			<div className={`${styles.row} ${styles.skill}`}>
				<div
					className={`${styles.three} ${styles.columns} ${styles.headerCol}`}>
					<h2>
						<span>Skills</span>
					</h2>
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
