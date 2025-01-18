import React from "react";
import Jobs from "./Jobs";
import styles from "./work.module.scss";

const Resume = ({ data }) => {
	const { skillmessage, education, work, skills } = data.resume;

	const educationMap = education.map((edu) => (
		<article key={edu.school} className={styles.educationItem}>
			<h3>{edu.school}</h3>
			<p className={styles.info}>
				{edu.degree} <span>&bull;</span>
				<time className={styles.date} dateTime={edu.graduated}>
					{edu.graduated}
				</time>
			</p>
			<p>{edu.description}</p>
		</article>
	));

	const skillsMap = skills.map((skill) => (
		<li key={skill.name} className={styles.skill}>
			<div className={styles.skillBar}>
				<div
					className={styles.skillFill}
					style={{ width: skill.level }}
					aria-label={`${skill.name} skill level`}
					role="progressbar"></div>
				<span className={styles.skillName}>{skill.name}</span>
			</div>
		</li>
	));

	return (
		<section className={styles.resume} aria-label="Resume">
			<div className={styles.section}>
				<h2 className={styles.sectionTitle} id="education">
					Education
				</h2>
				<div className={styles.content}>{educationMap}</div>
			</div>

			<div className={styles.section}>
				<h2 className={styles.sectionTitle} id="work">
					Work Experience
				</h2>
				<div className={styles.content}>
					<Jobs jobs={work} />
				</div>
			</div>

			<div className={styles.section}>
				<h2 className={styles.sectionTitle} id="skills">
					Skills
				</h2>
				<div className={styles.content}>
					<p>{skillmessage}</p>
					<ul className={styles.skillsList}>{skillsMap}</ul>
				</div>
			</div>
		</section>
	);
};

export default Resume;
