import React from "react";

const Jobs = props => {
    return (
        <>
            <div className='info'>
                <h1 className='workHeading'>{props.title}</h1>
                <span className='dates'>{props.years}</span>
            </div>
            <p className='buisnessAreas'>{props.buisness} - {props.area}</p>
            <ul className='description'>
                <li>{props.description}</li>
            </ul>
        </>
    )
}

export default Jobs;