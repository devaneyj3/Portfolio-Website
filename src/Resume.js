import React, {useState} from 'react';
import workData from './data/workData';
import educationData from './data/educationData';

const Resume = () => {
    let [ work, setWork ] = useState(workData)
    let [ education, setEducation ] = useState(educationData);
        

    return (
        <div className='resume'>
            <h1>Resume</h1>
            {work.map((job, i) => {
                return (
                    <>
                        <div className='info'>
                            <h1 className='workHeading'>{job.title}</h1>
                            <span class='dates'>{job.years}</span>
                        </div>
                        <p class='buisnessAreas'>{work.buisness} - {work.area}</p>
                        <ul class='desciption'>
                            <li>{work.description}</li>
                        </ul>
                    </>
                )
            })}
        </div>
    )
}

export default Resume;