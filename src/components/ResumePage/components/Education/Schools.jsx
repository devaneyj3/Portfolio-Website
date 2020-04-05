
import React from 'react';

const Schools = props => {
    return (
        <>
            <div className='info'>
                <h1 className='educationHeading'>{props.school}</h1>
                <span className='dates'>{props.years}</span>
            </div>
            <p className='buisnessAreas'>{props.degree}</p>
            <ul className='skills'>
                <li>{props.description}</li>
            </ul>
        </>
    )
}

export default Schools;