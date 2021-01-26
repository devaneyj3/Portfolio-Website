import React from "react";
import Nav from '../Nav/Nav';
import './ProjectItem.scss';

const ProjectItem = ({data}) => {
	return (
		<>
		<section className="ProjectItem">
			<Nav/>
			<div>
				<section className="project">
        <h1>{data.name}</h1>
				<a href={data.live_project}>Go To Live Project</a>
				<img src={data.image} alt={data.image} />
				{data.description.map(detail => {
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
