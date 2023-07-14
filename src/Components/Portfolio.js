import React from "react";

const Portfolio = ({ data }) => {
	const { projects } = data.portfolio;

	const projectsMap = projects.map((projects) => {
		const projectImage = "images/portfolio/" + projects.image;
		return (
			<div key={projects.title} className="columns portfolio-item">
				<a href={projects.url} title={projects.title}>
					<div className="item-wrap">
						<img
							className="portfolio-image"
							alt={projects.title}
							src={projectImage}
						/>
						<div className="overlay">
							<div className="portfolio-item-meta">
								<h5>{projects.title}</h5>
								<p>{projects.category}</p>
							</div>
						</div>
						<div className="link-icon">
							<i className="fa fa-link"></i>
						</div>
					</div>
				</a>
			</div>
		);
	});

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Works.</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf">
						{projectsMap}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
