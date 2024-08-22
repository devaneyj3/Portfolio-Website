import React from "react";
import styles from "../work.module.scss";

const Jobs = ({ jobs }) => {
	return (
		<div>
			{jobs.map((job) => {
				return (
					<div key={job.company}>
						<h3>{job.company}</h3>
						<p className={styles.info}>
							{job.title}
							<span>&bull;</span> <em className={styles.date}>{job.years}</em>
						</p>
						<ul>
							{job.description.map((item) => (
								<li className={styles.workList} key={item}>
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
