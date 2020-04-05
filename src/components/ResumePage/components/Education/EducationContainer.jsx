import React, {useState} from 'react';
import educationData from '../../../../data/educationData'
import School from './Schools';

const EducationContainer = () => {
    let [ education ] = useState(educationData)

    return (
        <>
        <section className="education">
            {education.map((school, index) => {
                return (
                    <School
                        key={index}
                        school={school.school}
                        years={school.years}
                        degree={school.degree}
                        description={school.description}
                        />
                    )
                }
            )}
        </section>
        </>
    )
}

export default EducationContainer;