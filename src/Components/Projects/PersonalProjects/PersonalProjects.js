import React from "react";
import styles from "../projects.module.scss"; // Adjust the path as necessary

const PersonalProjects = ({ data }) => {
	const { personal_projects } = data.portfolio;

	const projectsMap = personal_projects.map((project) => {
		const projectImage = "../../../images/portfolio/" + project.image;
		return (
			<div
				key={project.title}
				className={`${styles.columns} ${styles.portfolioItem}`}
				role="group"
				aria-labelledby={`project-title-${project.title}`}>
				<a
					href={project.url}
					title={project.title}
					aria-label={`View project: ${project.title}`}>
					<div className={styles.itemWrap}>
						<img
							className={styles.portfolioImage}
							alt={`Screenshot of ${project.title}, a ${project.category} project`}
							src={projectImage}
						/>
						<div className={styles.overlay}>
							<div className={styles.portfolioItemMeta}>
								<h3 id={`project-title-${project.title}`}>{project.title}</h3>
								<p>{project.category}</p>
							</div>
						</div>
						<div className={styles.linkIcon} aria-hidden="true">
							<i className="fa fa-link" aria-label="External link icon"></i>
						</div>
					</div>
				</a>
			</div>
		);
	});

	return (
		<section
			className={styles.portfolio}
			role="region"
			aria-label="Personal Projects">
			<div className="row">
				<div className="twelve columns collapsed">
					<h2>Check Out Some of My Personal Projects</h2>
					<div className={styles.portfolioWrapper}>{projectsMap}</div>
				</div>
			</div>
		</section>
	);
};

export default PersonalProjects;
