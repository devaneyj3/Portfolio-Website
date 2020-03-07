import React, {useState} from 'react';
import educationData from '../data/educationData';

const Education = () => {
    let [ education, setEducation ] = useState(educationData)

    return (
        <>
            {education.map(school => {
                return (
                    <>
                        <div className='info'>
                            <h1 className='educationHeading'>{school.school}</h1>
                            <span class='dates'>{school.years}</span>
                        </div>
                        <p class='buisnessAreas'>{school.degree}</p>
                        <ul class='skills'>
                            <li>${school.description}</li>
                        </ul>
                    </>
                )
            })}
        </>
    )
}

export default Education;