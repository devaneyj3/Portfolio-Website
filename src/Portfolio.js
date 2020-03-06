import React from 'react';
import Work from './Work';
import Description from './Description';
import Projects from './Projects';
import ContactMain from './ContactMain';
import './css/homepage.css'


const Portfolio = () => {
    return (
        <div>
            <Description/>
            <Work/> 
            <Projects/>
            <ContactMain/>
        </div>
    )
}

export default Portfolio;