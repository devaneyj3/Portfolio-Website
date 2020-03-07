import React from 'react';
import Jobs from './components/Jobs';
import Eduction from './components/Education';
import './css/resume.scss';

const Resume = () => {
    return (
        <div className='container'>
            <Jobs/>
            <hr></hr>
            <Eduction/>
        </div>
        
    )
}

export default Resume;