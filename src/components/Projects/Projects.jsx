import React from "react";
import data from "../../data/projects";
import { Row, Col, Button } from 'reactstrap';

const Projects = () => {
	return (
		<>
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
						<Row
						style={{  
							backgroundImage: `url(${item.image})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
}}>
							<Col className="column" xs= '6' sm="4">
							<a
								href={item.url}>
							</a>
							<h3>
								<a href={item.url}>{item.name}</a>
							</h3>
							{/* <p>{item.description}</p> */}
							</Col>
						</Row>
					)
				})}
			</div>
		</section>
				<Button outline color="info"><a href="https://github.com/devaneyj3">See more on GitHub</a></Button>
				</>
	);
};

export default Projects;
