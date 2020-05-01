import React, { useState } from "react";
import workData from "../../data/workData";
import Jobs from "./Jobs";

const JobsContainer = () => {
	let [work] = useState(workData);
	return (
		<>
			<section className="jobs">
				{work.map((job) => (
					<section key={job.id}>
						<Jobs
							key={job.id}
							position={job.position}
							years={job.years}
							company={job.company}
							city={job.city}
							acheivments={job.acheivments}
						/>
					</section>
				))}
			</section>
		</>
	);
};

export default JobsContainer;
