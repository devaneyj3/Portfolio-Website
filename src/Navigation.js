import React from 'react';
import { Link} from 'react-router-dom';
import './css/navigation.scss';

const Navigation = () => {
    return (
    <nav>
        <ul>
            <li><Link exact to='/portfolio'>Portfolio</Link></li>
            <li><Link exact to='/contact'>Contact</Link></li>
            <li><Link exact to='/resume'>Resume</Link></li>
        </ul>
    </nav>
    )
}

export default Navigation;