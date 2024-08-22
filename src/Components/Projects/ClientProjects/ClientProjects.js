import React from "react";
import styles from "../projects.module.scss"; // Ensure this path matches the location of your SCSS file

const ClientProjects = ({ data }) => {
	const { client_projects } = data.portfolio;

	const projectsMap = client_projects.map((project) => {
		const projectImage = "images/portfolio/" + project.image;
		return (
			<div key={project.title} className={styles.portfolio__item}>
				<a href={project.url} title={project.title}>
					<div className={styles.item__wrap}>
						<img
							className={styles.image}
							alt={project.title}
							src={projectImage}
						/>
						<div className={styles.overlay}>
							<div className={styles.meta}>
								<h3>{project.title}</h3>
								<p>{project.category}</p>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	});

	return (
		<section className={styles.portfolio}>
			<div className="row">
				<div className="twelve columns collapsed">
					<h2>Check Out Some My Client Projects.</h2>
					<div className={`${styles.portfolio__wrapper} cf`}>{projectsMap}</div>
				</div>
			</div>
		</section>
	);
};

export default ClientProjects;
