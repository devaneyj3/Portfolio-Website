import React from "react";
import Nav from '../Nav/Nav';
import './ProjectItem.scss';

const ProjectItem = ({project}) => {
	return (
		<>
		<section className="ProjectItem">
			<Nav/>
			<div>
				<section className="project">
        <h1>{project.name}</h1>
				<a href={project.live_project}>Go To Live Project</a>
				<img src={project.image} alt={project.image} />
				{project.description.map(detail => {
					return (
						<li>{detail}</li>
					)
				})}
				</section>
			</div>
		</section>
				</>
	);
};

export default ProjectItem;
