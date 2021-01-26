import React from "react";
import data from "../../data/projects";
import Nav from '../Nav/Nav';
import './Projects.scss';
import { Row, Col } from 'reactstrap';

const Projects = () => {
	return (
		<>
		<section className="projects">
			<Nav/>
			<div>
				{data.map(item => {
					return (
						<Row>
							<Col className="column" xs= '6' sm="4">
							<h3>
								<a href={item.url}>{item.name}</a>
							</h3>
							</Col>
						</Row>
					)
				})}
			</div>
		</section>
				{/* <Button outline color="info"><a href="https://github.com/devaneyj3">See more on GitHub</a></Button> */}
				</>
	);
};

export default Projects;
