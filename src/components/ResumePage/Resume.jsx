import React from 'react';
import JobsContainer from './components/Jobs/JobsContainer';
import EductionContainer from './components/Education/EducationContainer';
const Resume = () => {
    return (
        <div className='resume-page-container'>
            <JobsContainer/>
            <hr></hr>
            <EductionContainer/>
        </div>
        
    )
}

export default Resume;