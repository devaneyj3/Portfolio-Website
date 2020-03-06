import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <nav>
        <Link exact to='/portfolio'>Portfolio</Link>
        <Link exact to='/contact'>Contact</Link>
        <Link exact to='/resume'>Resume</Link>
    </nav>
    )
}

export default Navigation;