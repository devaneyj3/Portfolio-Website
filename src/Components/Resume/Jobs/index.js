import React from "react";
import styles from "../work.module.scss";

const Jobs = ({ jobs }) => {
	return (
		<section aria-labelledby="jobsHeading">
			{jobs.map((job) => (
				<article key={job.company} className={styles.job}>
					<h3>{job.company}</h3>
					<p className={styles.info}>
						<span>{job.title}</span>
						<span>&bull;</span>
						<time className={styles.date} dateTime={job.years}>
							{job.years}
						</time>
					</p>
					<ul>
						{job.description.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</article>
			))}
		</section>
	);
};

export default Jobs;
