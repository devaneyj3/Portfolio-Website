import React from "react";
import "./index.css";

const Jobs = ({ jobs }) => {
	return (
		<div>
			{jobs.map((job) => {
				return (
					<div key={job.company}>
						<h3>{job.company}</h3>
						<p className="info">
							{job.title}
							<span>&bull;</span> <em className="date">{job.years}</em>
						</p>
						<ul>
							{job.description.map((item) => (
								<li className="workList" key={item}>
									{item}
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Jobs;
