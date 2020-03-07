import React, { useState } from "react";
import workData from '../data/workData';

const Jobs = () => {
    let [ work, setWork ] = useState(workData)
    return (
        <>
        <section className='jobs'>
        {work.map((job) => {
            return (
                <>
                    <div className='info'>
                        <h1 className='workHeading'>{job.title}</h1>
                        <span class='dates'>{job.years}</span>
                    </div>
                    <p class='buisnessAreas'>{job.buisness} - {job.area}</p>
                    <ul class='description'>
                        <li>{job.description}</li>
                    </ul>
                </>
            )
        })}
        </section>
        </>
    )
}

export default Jobs;