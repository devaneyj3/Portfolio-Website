import React from 'react';
import Jobs from './Jobs.jsx';
import Eduction from './Education.jsx';
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