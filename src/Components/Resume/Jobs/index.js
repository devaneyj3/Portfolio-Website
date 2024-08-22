import React from "react";
import styles from "../work.module.scss";

const Jobs = ({ jobs }) => {
	return (
		<section role="region" aria-label="Jobs">
			{jobs.map((job) => (
				<article key={job.company} className={styles.job}>
					<h3>{job.company}</h3>
					<p className={styles.info}>
						<span>{job.title}</span>
						<span>&bull;</span> <em className={styles.date}>{job.years}</em>
					</p>
					<ul>
						{job.description.map((item, index) => (
							<li className={styles.workList} key={index}>
								{item}
							</li>
						))}
					</ul>
				</article>
			))}
		</section>
	);
};

export default Jobs;
