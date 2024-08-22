import React from "react";
import styles from "../projects.module.scss"; // Adjust the path as necessary

const PersonalProjects = ({ data }) => {
	const { personal_projects } = data.portfolio;

	const projectsMap = personal_projects.map((project) => {
		const projectImage = `../../../images/portfolio/${project.image}`;
		return (
			<article
				key={project.title}
				className={`${styles.columns} ${styles.portfolioItem}`}>
				<a
					href={project.url}
					title={`View project: ${project.title}`}
					aria-label={`View project: ${project.title}`}>
					<figure className={styles.itemWrap}>
						<img
							className={styles.portfolioImage}
							alt={`Screenshot of ${project.title}, a ${project.category} project`}
							src={projectImage}
						/>
						<figcaption className={styles.overlay}>
							<div className={styles.portfolioItemMeta}>
								<h3>{project.title}</h3>
								<p>{project.category}</p>
							</div>
						</figcaption>
					</figure>
				</a>
			</article>
		);
	});

	return (
		<section
			className={styles.portfolio}
			aria-labelledby="personalProjectsHeading">
			<div className="row">
				<div className="twelve columns collapsed">
					<h2 id="personalProjectsHeading">
						Check Out Some of My Personal Projects
					</h2>
					<div className={styles.portfolioWrapper}>{projectsMap}</div>
				</div>
			</div>
		</section>
	);
};

export default PersonalProjects;
