import React from 'react';
import { Link, Route } from 'react-router-dom';
import Portfolio from './PortfolioPage/Portfolio.jsx';
import Contact from './ContactPage/Contact.jsx';
import Resume from './ResumePage/Resume.jsx';

const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <Link to ='/portfolio'>Portfolio</Link>
                <Link to ='/contact'>Contact</Link>
                <Link to ='/resume'>Resume</Link>
            </ul>
        </nav>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/resume' component={Resume}/>
    </>
    )
}

export default Navigation;