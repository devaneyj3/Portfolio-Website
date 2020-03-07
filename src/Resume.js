import React from 'react';
import Jobs from './components/Jobs';
import Eduction from './components/Education';

const Resume = () => {
    return (
        <div className='resume'>
            <h1>Resume</h1>
            <Jobs/>
            <Eduction/>
        </div>
    )
}

export default Resume;