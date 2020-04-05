import React, { useState } from "react";
import workData from '../../../../data/workData';
import Jobs from './Jobs';

const JobsContainer = () => {
    let [ work ] = useState(workData)
    return (
        <>
        <section className='jobs'>
        {work.map((job, index) => 
            <Jobs
                key={index}
                title={job.title}
                years={job.years}
                buisness={job.buisness}
                area={job.area}
                description={job.description}
                />
        )}
        </section>
        </>
    )
}

export default JobsContainer;