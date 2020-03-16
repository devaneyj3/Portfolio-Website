import React from 'react';
import Jobs from './Jobs';
import Eduction from './Education';

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