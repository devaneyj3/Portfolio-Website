import React from "react";
import styles from "../projects.module.scss"; // Ensure this path matches the location of your SCSS file

const ProjectsSection = ({ title, projects, imagePath, sectionId }) => {
	const projectsMap = projects.map((project) => {
		const projectImage = `${imagePath}/${project.image}`;
		return (
			<article key={project.title} className={styles.portfolio__item}>
				<a
					href={project.url}
					title={`View project: ${project.title}`}
					aria-label={`View project: ${project.title}`}>
					<figure className={styles.item__wrap}>
						<img
							className={styles.image}
							src={projectImage}
							alt={`Screenshot of ${project.title}, a ${project.category} project`}
						/>
						<figcaption className={styles.overlay}>
							<div className={styles.meta}>
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
		<section className={styles.portfolio} aria-labelledby={sectionId}>
			<div className="row">
				<div className="twelve columns collapsed">
					<h2 id={sectionId}>{title}</h2>
					<div className={`${styles.portfolio__wrapper} cf`}>{projectsMap}</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;