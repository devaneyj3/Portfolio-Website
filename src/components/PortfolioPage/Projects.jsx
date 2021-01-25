import React from "react";
import data from "../../data/projects";
import { Row, Col } from 'reactstrap';

const Projects = () => {
	return (
		<section className="portfolio">
			<header>
				<h2>My Recent Work</h2>
				<p>
					I have done many projects in my time and others as part of Lambda
					School.
				</p>
			</header>
			<div className="projects">
				{data.map(item => {
					return (
						<Row>
							<Col xs= '6' sm="4">
							<a
								href={item.url}
								className="image featured">
								<img src={item.image} alt={item.name}></img>
							</a>
							<h3>
								<a href={item.url}>{item.name}</a>
							</h3>
							<p>An app designed where users can search and reserve fitness classes</p>
							<p>Constructed API endpoints and database schema using Knex</p>
							<p>Collaborated with a team of web developers to divde tasks</p>
							</Col>
						</Row>
					)
				})}
				<footer>
					<p>
						Whether you are a small buisness, potential employer, or sole
						proprietor, I can add value to your team or project. View my
						complete portfolio on
						<a href="https://github.com/devaneyj3"> GitHub.</a>
					</p>
				</footer>
			</div>
		</section>
	);
};

export default Projects;
