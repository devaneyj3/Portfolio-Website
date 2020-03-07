import React, { useState } from "react";
import workData from '../data/workData';

const Jobs = () => {
    let [ work, setWork ] = useState(workData)
    return (
        <>
        {work.map((job, i) => {
            return (
                <>
                    <div className='info'>
                        <h1 className='workHeading'>{job.title}</h1>
                        <span class='dates'>{job.years}</span>
                    </div>
                    <p class='buisnessAreas'>{job.buisness} - {job.area}</p>
                    <ul class='desciption'>
                        <li>{job.description}</li>
                    </ul>
                </>
            )
        })}
        </>
    )
}

export default Jobs;